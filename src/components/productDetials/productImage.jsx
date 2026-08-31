import "./productDetails.css";

export default function ProductImage({ productDetails }) {
  return (
    <div className="img_item">
      <div className="big_img">
        <img
          id="big_img"
          src={productDetails.images[0]}
          alt={productDetails.title}
        />
      </div>
      <div className="small_img">
        {productDetails.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={productDetails.title}
            onClick={() => {
              document.getElementById("big_img").src = img;
            }}
          />
        ))}
      </div>
    </div>
  );
}
