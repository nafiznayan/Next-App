// import React from "react";
// interface Props {
//   params: { slug: string[] };
//   searchParams: { sortOrder: string };
// }

// const ProductPage = ({
//   params: { slug },
//   searchParams: { sortOrder },
// }: Props) => {
//   return (
//     <div>
//       ProductPage {slug} {sortOrder}
//     </div>
//   );
// };

// export default ProductPage;
import React from "react";

interface Props {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ sortOrder: string }>;
}

const ProductPage = async ({ params, searchParams }: Props) => {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const slug = resolvedParams.slug;
  const sortOrder = resolvedSearchParams.sortOrder || "asc";

  return (
    <div>
      ProductPage {slug.join("/")} {sortOrder}
    </div>
  );
};

export default ProductPage;
