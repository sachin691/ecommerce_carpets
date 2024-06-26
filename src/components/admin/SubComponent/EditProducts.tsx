import { getCookie } from "../../../utils/cookies";
import toast from "react-hot-toast";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Chip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";

import "./product.css";
import { validationErrors } from "../../../helpers/constant";
import axios from "axios";
import { useParams } from "react-router-dom";
import { RootState } from "../../../Redux/store";
import { useSelector } from "react-redux";
import { useLayoutEffect, useState } from "react";
import { Button } from "@nextui-org/react";

const StyledTextField = styled(TextField)(({ theme, error }) => ({
  "& .MuiOutlinedInput-root": {
    borderColor: error ? "red" : theme.palette.divider,
  },
}));

const initialProduct: Product = {
  brand: "",
  title: "",
  color: "",
  discountedPrice: "",
  price: "",
  discountPercent: 0,
  highlights: [],
  dimensionHeight: "",
  dimensionWidth: "",
  details: "",
  quantity: "",
  material: "",
  description: "",
  topLevelCategory: "",
  secondLevelCategory: "",
  thirdLevelCategory: "",
  orders: "",
  imageCount: "",
  imageArray: [],
};

type Product = {
  brand: string;
  title: string;
  color: string;
  discountedPrice: string;
  price: string;
  discountPercent: number;
  highlights: string[];
  details: string;
  quantity: number | string;
  material: string;
  dimensionHeight: number | string;
  dimensionWidth: number | string;
  description: string;
  topLevelCategory: string;
  secondLevelCategory: string;
  thirdLevelCategory: string;
  orders: number | string;
  imageCount: number | string;
  imageArray: string[];
};

type OutputProduct = {
  brand: string;
  title: string;
  color: string;
  discountedPrice: string;
  price: string;
  discountPercent: number;
  highlights: string[];
  details: string;
  minimumOrder: number | string;
  material: string;
  dimension: string;
  description: string;
  topLevelCategory: string;
  secondLevelCategory: string;
  thirdLevelCategory: string;
  quantity: number | string;
  imageCount: number | string;
  orders: number | string;
};

let outputProduct: OutputProduct = {
  brand: "",
  title: "",
  color: "",
  discountedPrice: "",
  price: "",
  discountPercent: 0,
  highlights: [],
  details: "",
  minimumOrder: "",
  material: "",
  dimension: "",
  description: "",
  topLevelCategory: "",
  secondLevelCategory: "",
  thirdLevelCategory: "",
  quantity: "",
  imageCount: "",
  orders: "",
};

export default function EditProduct() {
  const { id } = useParams();
  console.log(id);
  const theme = useTheme();
  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);
  const token = getCookie("token");

  const [highlights, setHighlights] = useState<any>("");

  const [finalImageArray, setFinalImageArray] = useState<any>([]);

  const [images, setImages] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [product, setProduct] = useState<Product>(initialProduct);

  const extractNumbersFromString = (inputString: string): number[] => {
    const numberRegex = /\d+(\.\d+)?/g;
    const matches = inputString.match(numberRegex);
    if (matches) {
      return matches.map((match) => parseFloat(match));
    } else {
      return [];
    }
  };

  function extractFileNameFromUrl(url: string) {
    const parts = url.split("/");
    const fileNameWithExtension = parts[parts.length - 1];
    return fileNameWithExtension;
  }

  const blobUrlToFile = async (url: string) => {
    try {
      const res = await fetch(url);
      const blob = await res.blob();
      const file = new File([blob], extractFileNameFromUrl(url), { type: blob.type });
      return file;
    } catch (error) {
      throw new Error(`Error converting blob URL to file: ${error}`);
    }
  };

  async function convertUrlsToFilenames(urls: Array<string>) {
    const files = [];
    try {
      for (const url of urls) {
        const file = await blobUrlToFile(url);
        files.push(file);
      }
      return files;
    } catch (error) {
      console.error("Error:", error);
      return [];
    }
  }

  const fetchProductForEdit = async () => {
    try {
      const getProductResponse = await axios.get(`${apiUrl}/items/${id}`);

      if (!getProductResponse.data.success) {
        toast.error("Product Not Found. Please try again");
        return;
      }
      const { imageCount } = getProductResponse.data.payload.result;
      console.log("imageCount: ", imageCount);
      const fetchedImages = [];
      for (let i = 1; i <= imageCount; i++) {
        fetchedImages.push(`${apiUrl}/items/itemImages/${id}_img${i}.jpg`);
      }

      console.log("fetchedImages: ", fetchedImages);

      (async () => {
        try {
          const files = await convertUrlsToFilenames(fetchedImages);
          setFinalImageArray(files);
          console.log("images: ", files);
        } catch (error) {
          console.error("Error:", error);
        }
      })();

      setImages(fetchedImages);

      const [dimensionHeight, dimensionWidth] = extractNumbersFromString(
        getProductResponse.data.payload.result.dimension
      );

      // console.log(dimensionHeight, dimensionWidth);
      setProduct({
        ...getProductResponse.data.payload.result,
        quantity: getProductResponse.data.payload.result.minimumOrder,
        orders: getProductResponse.data.payload.result.quantity,
        highlights: JSON.parse(getProductResponse.data.payload.result.highlights),
        dimensionHeight,
        dimensionWidth,
      });
    } catch (error) {
      toast.error("Failed to fetch product. Please try again later.");
      return;
    }
  };

  useLayoutEffect(() => {
    fetchProductForEdit();
  }, [apiUrl, id]);

  const [showImageError, setShowImageError] = useState(false);

  const [isError, setIsError] = useState({
    brand: { isError: false },
    title: { isError: false },
    color: { isError: false },
    discountedPrice: { isError: false },
    price: { isError: false },
    discountPercent: { isError: false },
    highlights: { isError: false },
    details: { isError: false },
    quantity: { isError: false },
    material: { isError: false },
    dimensionHeight: { isError: false },
    dimensionWidth: { isError: false },
    description: { isError: false },
    topLevelCategory: { isError: false },
    secondLevelCategory: { isError: false },
    thirdLevelCategory: { isError: false },
    orders: { isError: false },
    imageCount: { isError: false },
    imageArray: { isError: false },
  });

  const updateProduct = async () => {
    console.log("start update");
    const percentage: number =
      ((parseInt(product.price) - parseInt(product.discountedPrice)) / parseInt(product.price)) * 100;
    setProduct({
      ...product,
      imageArray: images,
      imageCount: images.length,
      discountPercent: percentage,
    });

    if (validateProduct()) {
      toast.error("please insert data in required field");
    } else {
      if (product.price <= product.discountedPrice) {
        toast.error("Price must be greater than discount price");
        return;
      } else if (images.length === 0) {
        toast.error("please insert atleast one image");
        return;
      } else if (product.orders <= product.quantity) {
        toast.error("Total stock order quantity must be greater than order quantity");
        return;
      } else {
        convertToOutputProduct(product);

        console.log("final image array: ", finalImageArray);

        const formData = new FormData();
        finalImageArray.forEach((file: any) => {
          formData.append("images", file);
        });

        const imageResponse = await axios.put(`${apiUrl}/items/itemImages`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            itemId: id,
          },
        });

        if (!imageResponse.data.success) {
          toast.error(`Error While Uploading Images`);
          return;
        }
        const createItemDetailsResponse = await axios.put(`${apiUrl}/items/updateItem/${id}`, outputProduct, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!createItemDetailsResponse.data.success) {
          toast.error(`Error While Updating Product`);
          return;
        }
        toast.success(`Product Updated successfully`);
      }
    }
    setIsLoading(false);
  };

  function convertToOutputProduct(product: Product) {
    return (outputProduct = {
      brand: product.brand.trim(),
      title: product.title.trim(),
      color: product.color.trim(),
      discountedPrice: product.discountedPrice,
      price: product.price,
      discountPercent: product.discountPercent,
      highlights: product.highlights.map((highlight) => highlight.trim()),
      details: product.details.trim(),
      minimumOrder: product.quantity,
      material: product.material.trim(),
      dimension: `${product.dimensionWidth} cm x ${product.dimensionHeight} cm`,
      description: product.description.trim(),
      topLevelCategory: product.topLevelCategory.trim(),
      secondLevelCategory: product.secondLevelCategory.trim(),
      thirdLevelCategory: product.thirdLevelCategory.trim(),
      quantity: product.orders,
      imageCount: images.length,
      orders: 0,
    });
  }

  const validateProduct = () => {
    let status: boolean = false;

    const requiredFields: (keyof Product)[] = [
      "brand",
      "title",
      "color",
      "highlights",
      "details",
      "material",
      "topLevelCategory",
      "secondLevelCategory",
      "thirdLevelCategory",
    ];

    const numberRequiredFields: (keyof Product)[] = [
      "price",
      "discountedPrice",
      "dimensionHeight",
      "dimensionWidth",
      "quantity",
      "orders",
    ];

    numberRequiredFields.forEach((field: keyof Product) => {
      const fieldValue = +product[field];
      if (typeof fieldValue !== "number" || fieldValue <= 0) {
        setIsError((prevError: typeof isError) => ({
          ...prevError,
          [field]: { isError: true },
        }));
        status = true;
      }
    });

    requiredFields.forEach((field: keyof Product) => {
      const fieldValue = product[field];

      if (typeof fieldValue === "string" && fieldValue.trim().length === 0) {
        setIsError((prevError: any) => ({
          ...prevError,
          [field]: { isError: true },
        }));
        status = true;
      }
    });

    if (product.highlights.length === 0) {
      setIsError((prevError) => ({
        ...prevError,
        highlights: { isError: true },
      }));
      status = true;
    }

    if (product.description.length < 20 || product.description.length >= 400) {
      setIsError((prevError) => ({
        ...prevError,
        description: { isError: true },
      }));
      status = true;
    }

    return status;
  };

  const addHighlight = () => {
    if (highlights.length > 0) {
      let temp: any = [...product.highlights];
      temp.push(highlights);
      setProduct({ ...product, highlights: temp });
      setHighlights("");
    }
  };

  function handleUserInput(e: any) {
    const { name, value } = e.target;
    setIsError({ ...isError, [name]: { ...name, isError: false } });
    const numberRequiredFields: (keyof Product)[] = [
      "price",
      "discountedPrice",
      "dimensionHeight",
      "dimensionWidth",
      "quantity",
      "orders",
    ];

    if (numberRequiredFields.includes(name)) {
      if (+value < 0 || value === "") setProduct({ ...product, [name]: "" });
      if (+value < 0 || value === "") setProduct({ ...product, [name]: "" });
      else setProduct({ ...product, [name]: +value });
    } else {
      setProduct({ ...product, [name]: value });
    }
  }

  function chipDelete(index: number): void {
    let temp: string[] = [...product.highlights];
    temp = temp.filter((_item: string, i: number) => i !== index);
    setProduct({ ...product, highlights: temp });
  }

  return (
    <div className="cp-wrapper">
      <div className="cp-container">
        <h3 className="cp-title">Edit Product</h3>
        <div className="cp-form-wrapper">
          <div className="cp-form">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <StyledTextField
                  fullWidth
                  onChange={handleUserInput}
                  value={product.title}
                  id="outlined-basic"
                  name="title"
                  label="Title"
                  variant="outlined"
                  error={isError.title.isError}
                />
                {isError.title.isError ? <span className="cp-errors">{validationErrors.TITLE}</span> : ""}
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  fullWidth
                  onChange={handleUserInput}
                  value={product.brand}
                  id="outlined-basic"
                  name="brand"
                  label="Brand"
                  variant="outlined"
                  error={isError.brand.isError}
                />
                {isError.brand.isError ? <span className="cp-errors">{validationErrors.BRAND}</span> : ""}
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  fullWidth
                  onChange={handleUserInput}
                  value={product.color}
                  id="outlined-basic"
                  name="color"
                  label="Color"
                  variant="outlined"
                  error={isError.color.isError}
                />
                {isError.color.isError ? <span className="cp-errors">{validationErrors.COLOR}</span> : ""}
              </Grid>
              <Grid item xs={6}>
                <StyledTextField
                  fullWidth
                  id="outlined-basic"
                  label="Minimum Orders"
                  name="quantity"
                  variant="outlined"
                  value={product.quantity}
                  type="number"
                  onChange={handleUserInput}
                  error={isError.quantity.isError}
                />
                {isError.quantity.isError ? <span className="cp-errors">{validationErrors.REQUIRED}</span> : ""}
              </Grid>
              <Grid item xs={6}>
                <StyledTextField
                  fullWidth
                  id="outlined-basic"
                  label="Stock Quantity"
                  name="orders"
                  variant="outlined"
                  type="number"
                  onChange={handleUserInput}
                  value={product.orders}
                  error={isError.orders.isError}
                />
                {isError.orders.isError ? <span className="cp-errors">{validationErrors.REQUIRED}</span> : ""}
              </Grid>
              <Grid item xs={6}>
                <StyledTextField
                  fullWidth
                  id="outlined-basic"
                  label="Original Price ($)"
                  name="price"
                  variant="outlined"
                  type="number"
                  onChange={handleUserInput}
                  error={isError.price.isError}
                  value={product.price}
                />
                {isError.price.isError ? <span className="cp-errors">{validationErrors.REQUIRED}</span> : ""}
              </Grid>
              <Grid item xs={6}>
                <StyledTextField
                  fullWidth
                  id="outlined-basic"
                  label="Discount Price ($)"
                  name="discountedPrice"
                  variant="outlined"
                  type="number"
                  onChange={handleUserInput}
                  value={product.discountedPrice}
                  error={isError.discountedPrice.isError}
                />
                {isError.discountedPrice.isError ? <span className="cp-errors">{validationErrors.REQUIRED}</span> : ""}
              </Grid>
              <Grid item xs={6}>
                <StyledTextField
                  fullWidth
                  id="outlined-basic"
                  label="Material"
                  name="material"
                  variant="outlined"
                  onChange={handleUserInput}
                  value={product.material}
                  error={isError.material.isError}
                />
                {isError.material.isError ? <span className="cp-errors">{validationErrors.REQUIRED}</span> : ""}
              </Grid>
              <Grid item xs={3}>
                <StyledTextField
                  fullWidth
                  id="outlined-basic"
                  label="Height (cm)"
                  name="dimensionHeight"
                  variant="outlined"
                  type="number"
                  onChange={handleUserInput}
                  value={product.dimensionHeight}
                  error={isError.dimensionHeight.isError}
                />
                {isError.dimensionHeight.isError ? <span className="cp-errors">{validationErrors.REQUIRED}</span> : ""}
              </Grid>
              <Grid item xs={3}>
                <StyledTextField
                  fullWidth
                  id="outlined-basic"
                  label="Width (cm)"
                  name="dimensionWidth"
                  variant="outlined"
                  type="number"
                  onChange={handleUserInput}
                  value={product.dimensionWidth}
                  error={isError.dimensionWidth.isError}
                />
              </Grid>
              <Grid item xs={12}>
                <textarea
                  rows={4}
                  cols={50}
                  placeholder="HighLights"
                  value={highlights}
                  onChange={(e) => {
                    setIsError((prevError) => ({
                      ...prevError,
                      highlights: { isError: false },
                    }));
                    setHighlights(e.target.value);
                  }}
                  className={isError.highlights.isError ? "cp-textarea-error" : "cp-textarea"}
                ></textarea>
                <Button onClick={addHighlight} className="rounded-md" color="secondary">
                  Add Hightlight
                </Button>
                <div className="flex flex-wrap gap-[1rem] my-3">
                  {product.highlights.length > 0 &&
                    product.highlights.map((item: any, index: number) => (
                      <Chip key={index} onDelete={() => chipDelete(index)} label={item} />
                    ))}
                </div>
                {isError.highlights.isError ? <span className="cp-errors">{validationErrors.HIGHLIGHT}</span> : ""}
              </Grid>

              <Grid item xs={12}>
                <StyledTextField
                  fullWidth
                  id="outlined-basic"
                  name="details"
                  label="Details"
                  variant="outlined"
                  error={isError.details.isError}
                  onChange={handleUserInput}
                  value={product.details}
                />
                {isError.details.isError ? <span className="cp-errors">{validationErrors.DETAILS}</span> : ""}
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  fullWidth
                  id="outlined-basic"
                  name="topLevelCategory"
                  label="Top Level Category"
                  variant="outlined"
                  error={isError.topLevelCategory.isError}
                  onChange={handleUserInput}
                  value={product.topLevelCategory}
                />
                {isError.topLevelCategory.isError ? (
                  <span className="cp-errors">{validationErrors.FIRST_LEVEL_CATEGORY}</span>
                ) : (
                  ""
                )}
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  fullWidth
                  id="outlined-basic"
                  name="secondLevelCategory"
                  label="Second Level Category"
                  variant="outlined"
                  value={product.secondLevelCategory}
                  error={isError.secondLevelCategory.isError}
                  onChange={handleUserInput}
                />
                {isError.secondLevelCategory.isError ? (
                  <span className="cp-errors">{validationErrors.SECOND_LEVEL_CATEGORY}</span>
                ) : (
                  ""
                )}
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  fullWidth
                  id="outlined-basic"
                  name="thirdLevelCategory"
                  label="Third Level Category"
                  variant="outlined"
                  error={isError.thirdLevelCategory.isError}
                  value={product.thirdLevelCategory}
                  onChange={handleUserInput}
                />
                {isError.thirdLevelCategory.isError ? (
                  <span className="cp-errors">{validationErrors.THIRD_LEVEL_CATEGORY}</span>
                ) : (
                  ""
                )}
              </Grid>

              <Grid item xs={12}>
                <textarea
                  required
                  rows={4}
                  cols={50}
                  onChange={handleUserInput}
                  className={isError.description.isError ? "cp-textarea-error" : "cp-textarea"}
                  placeholder="Desciption"
                  name="description"
                  value={product.description.toString()}
                  minLength={20}
                  maxLength={300}
                ></textarea>
                {isError.description.isError ? <span className="cp-errors">{validationErrors.DESCRIPTION}</span> : ""}
              </Grid>
            </Grid>
          </div>

          <div className="cp-img-upload">
            <input
              type="file"
              hidden
              id="actual-btn"
              className="cp-file"
              accept=".jpg,.jpeg"
              onChange={(e) => {
                let tempArr = [];
                let finalTemp = [];
                if (e.target.files) {
                  for (let i = 0; i < e.target.files.length; i++) {
                    if (e.target.files[i].size > 1000000) {
                      setShowImageError(true);
                      setTimeout(() => {
                        setShowImageError(false);
                      }, 2000);
                    } else {
                      tempArr.push(URL.createObjectURL(e.target.files[i]));
                      finalTemp.push(e.target.files[i]);
                    }
                  }
                  setFinalImageArray([...finalImageArray, ...finalTemp]);
                  setImages([...images, ...tempArr]);
                }
              }}
              multiple
            />
            <label htmlFor="actual-btn">Add Images</label>
            <ImageList
              sx={{
                width: "100%",
                maxWidth: "500px",
                margin: "0 auto",
                [theme.breakpoints.down("lg")]: {
                  maxWidth: "400px",
                },
                [theme.breakpoints.down("md")]: {
                  maxWidth: "300px",
                },
              }}
              cols={3}
              rowHeight={164}
              className="cp-img-list"
            >
              {images.length > 0 ? (
                images.map((item: any, i: any) => (
                  <ImageListItem key={i}>
                    <div className="img-content-wrapper">
                      <img
                        style={{
                          margin: "10px",
                          width: "164px",
                          height: "164px",
                        }}
                        src={item}
                        alt="image"
                        loading="lazy"
                      />
                      <div className="cp-icon">
                        <IconButton
                          aria-label="delete"
                          onClick={() => {
                            setImages(images.filter((img: any) => img !== item));
                            setFinalImageArray((prevState: any) => {
                              const updatedArray = [...prevState];
                              updatedArray.splice(i, 1);
                              return updatedArray;
                            });
                            console.log("final image array after deletion", finalImageArray);
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </div>
                    </div>
                  </ImageListItem>
                ))
              ) : (
                <div style={{ textAlign: "center", margin: "10px", color: "red" }}>*{validationErrors.NO_IMAGE}</div>
              )}
            </ImageList>
            {showImageError && (
              <div style={{ textAlign: "center" }} className="cp-errors">
                {" "}
                {validationErrors.IMAGE_SIZE_EXCEED}{" "}
              </div>
            )}
          </div>
        </div>
        <Button
          className="w-full lg:w-[35rem] h-[3rem] mt-[30px] rounded-md"
          onClick={updateProduct}
          color="success"
          isLoading={isLoading}
          variant="solid"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
