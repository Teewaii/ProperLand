import React from "react";

function ForSale_btn({ status }) {
  return (
    <div className="sale_btn bg-secondary font-bold text-md py-[12px] px-[20px] rounded-md mt-[26px] 2xl:py-[10px] xl:px-[26px] ">
      {status}
    </div>
  );
}

export default ForSale_btn;
