import React from "react";
import ProductListAfter from "./product-list-after";
import ProductListBefore from "./product-list-before";
function ExclusiveStateLiftApp() { 
    return (
        <>
        <ProductListBefore />
        <ProductListAfter />
        </>
    )
}
export default ExclusiveStateLiftApp;
