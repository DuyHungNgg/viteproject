// app/data/compareProducts.ts

export type SpecGroupId = "general" | "product" | "dimensions" | "warranty";

export interface SpecItem {
  key: string;   // key nội bộ, dùng để map
  label: string; // text hiển thị bên trái
}

export interface SpecGroup {
  id: SpecGroupId;
  title: string;
  items: SpecItem[];
}

export interface CompareProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  specs: Record<string, string>; // key trùng với SpecItem.key
}

// ====== SCHEMA CÁC NHÓM THÔNG SỐ ======
export const specGroups: SpecGroup[] = [
  {
    id: "general",
    title: "General",
    items: [
      { key: "sales_package", label: "Sales Package" },
      { key: "model_number", label: "Model Number" },
      { key: "secondary_material", label: "Secondary Material" },
      { key: "configuration", label: "Configuration" },
      { key: "upholstery_material", label: "Upholstery Material" },
      { key: "upholstery_color", label: "Upholstery Color" },
    ],
  },
  {
    id: "product",
    title: "Product",
    items: [
      { key: "filling_material", label: "Filling Material" },
      { key: "finish_type", label: "Finish Type" },
      { key: "adjustable_headrest", label: "Adjustable Headrest" },
      { key: "max_load", label: "Maximum Load Capacity" },
      { key: "origin", label: "Origin of Manufacture" },
    ],
  },
  {
    id: "dimensions",
    title: "Dimensions",
    items: [
      { key: "width", label: "Width" },
      { key: "height", label: "Height" },
      { key: "depth", label: "Depth" },
      { key: "weight", label: "Weight" },
      { key: "seat_height", label: "Seat Height" },
      { key: "leg_height", label: "Leg Height" },
    ],
  },
  {
    id: "warranty",
    title: "Warranty",
    items: [
      { key: "warranty_summary", label: "Warranty Summary" },
      { key: "warranty_service", label: "Warranty Service Type" },
      { key: "covered", label: "Covered in Warranty" },
      { key: "not_covered", label: "Not Covered in Warranty" },
      { key: "domestic", label: "Domestic Warranty" },
    ],
  },
];

// ====== “DATABASE” SẢN PHẨM DÙNG CHO SO SÁNH ======
export const compareProducts: CompareProduct[] = [
  {
    id: 1,
    name: "Asgaard Sofa",
    price: 250000,
    image: "/img/prod/prod1.jpg",
    rating: 4.7,
    reviews: 204,
    specs: {
      // General
      sales_package: "1 sectional sofa",
      model_number: "TFCBLGRBL6SRHS",
      secondary_material: "Solid Wood",
      configuration: "L-shaped",
      upholstery_material: "Fabric + Cotton",
      upholstery_color: "Bright Grey & Lion",

      // Product
      filling_material: "Foam",
      finish_type: "Bright Grey & Lion",
      adjustable_headrest: "No",
      max_load: "280 KG",
      origin: "India",

      // Dimensions
      width: "265.32 cm",
      height: "76 cm",
      depth: "167.76 cm",
      weight: "45 KG",
      seat_height: "41.52 cm",
      leg_height: "5.46 cm",

      // Warranty
      warranty_summary: "1 Year Manufacturing Warranty",
      warranty_service:
        "For Warranty Claims or Any Product Related Issues Please Email at support@furniro.com",
      covered:
        "Warranty of the product is limited to manufacturing defects only.",
      not_covered:
        "The Warranty Does Not Cover Damages Due To Usage, Mishandling, Or Natural Wear & Tear.",
      domestic: "1 Year",
    },
  },
  {
    id: 2,
    name: "Outdoor Sofa Set",
    price: 270000,
    image: "/img/prod/prod2.jpg",
    rating: 3,
    reviews: 189,
    specs: {
      // General
      sales_package: "1 Three Seater, 2 Single Seater",
      model_number: "DTUBLGRBL568",
      secondary_material: "Solid Wood",
      configuration: "L-shaped",
      upholstery_material: "Fabric + Cotton",
      upholstery_color: "Bright Grey & Lion",

      // Product
      filling_material: "Matte",
      finish_type: "Bright Grey & Lion",
      adjustable_headrest: "Yes",
      max_load: "300 KG",
      origin: "India",

      // Dimensions
      width: "265.32 cm",
      height: "76 cm",
      depth: "167.76 cm",
      weight: "65 KG",
      seat_height: "41.52 cm",
      leg_height: "5.46 cm",

      // Warranty
      warranty_summary: "2 Years Manufacturing Warranty",
      warranty_service:
        "On-site service. Technician will visit to check & repair.",
      covered:
        "Manufacturing defects in joints, frame, and upholstery stitching.",
      not_covered:
        "Damage due to misuse, improper cleaning, or exposure to extreme conditions.",
      domestic: "2 Years",
    },
  },
];
