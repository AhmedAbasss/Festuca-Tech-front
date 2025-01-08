"use client";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "@/store";

export const Categories = () => {
  // const categories = await getCategories();

  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const isRtl = themeConfig.rtlClass === "rtl" ? true : false;
  const isDark = themeConfig.isDarkMode;
  return (
    // <Grid container spacing={3}>
    //   {/* {categories.map((item) => ( */}
    //     <Grid item lg={2} md={3} sm={4} xs={6} key={item.id}>
    //       <CategoryCard>
    //         <NextImage width={300} height={300} alt="category" src={item.image as string} />

    //         <CategoryTitle className="category-title">
    //           <H4>{item.name}</H4>
    //         </CategoryTitle>
    //       </CategoryCard>
    //     </Grid>
    //   {/* ))} */}
    // </Grid>
    <section className="section-category overflow-hidden py-[50px] max-[1199px]:py-[35px]">
      <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full mb-[-24px]">
          {/* <div className="min-[992px]:w-[41.66%] w-full px-[12px] mb-[24px]">
            <div className="bb-category-img relative max-[991px]:hidden">
              <img src="assets/img/category/category.jpg" alt="category" className="w-full rounded-[30px]" />
              <div className="bb-offers py-[5px] px-[15px] absolute top-[20px] right-[20px] bg-[#000] opacity-[0.8] rounded-[15px]">
                <span className="text-[14px] font-normal text-[#fff]">50% Off</span>
              </div>
            </div>
          </div> */}
          <div className="min-[992px]:w-[58.33%] w-full px-[12px] mb-[24px]">
            <div className="bb-category-contact max-[991px]:mt-[-24px]">
              {/* <div className="category-title mb-[30px] max-[991px]:hidden" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                <h2 className="font-quicksand text-[124px] text-[#fff] opacity-[0.15] font-bold leading-[1.2] tracking-[0.03rem] max-[1399px]:text-[95px] max-[1199px]:text-[70px] max-[767px]:text-[42px]">
                  Explore Categories
                </h2>
              </div> */}
              <div className="bb-category-block owl-carousel ml-[-150px] w-[calc(100%+150px)] pt-[30px] pl-[30px] bg-[#fff] rounded-tl-[30px] relative max-[991px]:ml-[0] max-[991px]:w-full max-[991px]:p-[0]">
                <div
                  className="bb-category-box p-[30px] rounded-[20px] flex flex-col items-center text-center max-[1399px]:p-[20px] category-items-1 bg-[#fef1f1]"
                  data-aos="flip-left"
                  data-aos-duration="1000"
                  data-aos-delay="200">
                  <div className="category-image mb-[12px]">
                    <img
                      src="assets/img/category/1.svg"
                      alt="category"
                      className="w-[50px] h-[50px] max-[1399px]:h-[65px] max-[1399px]:w-[65px] max-[1199px]:h-[50px] max-[1199px]:w-[50px]"
                    />
                  </div>
                  <div className="category-sub-contact">
                    <h5 className="mb-[2px] text-[16px] font-quicksand text-[#3d4750] font-semibold tracking-[0.03rem] leading-[1.2]">
                      <a href="shop-left-sidebar-col-3.html" className="font-Poppins text-[16px] font-medium leading-[1.2] tracking-[0.03rem] text-[#3d4750] capitalize">
                        vegetables
                      </a>
                    </h5>
                    <p className="font-Poppins text-[13px] text-[#686e7d] leading-[25px] font-light tracking-[0.03rem]">485 items</p>
                  </div>
                </div>
                <div
                  className="bb-category-box p-[30px] rounded-[20px] flex flex-col items-center text-center max-[1399px]:p-[20px] category-items-2 bg-[#e1fcf2]"
                  data-aos="flip-left"
                  data-aos-duration="1000"
                  data-aos-delay="400">
                  <div className="category-image mb-[12px]">
                    <img
                      src="assets/img/category/2.svg"
                      alt="category"
                      className="w-[50px] h-[50px] max-[1399px]:h-[65px] max-[1399px]:w-[65px] max-[1199px]:h-[50px] max-[1199px]:w-[50px]"
                    />
                  </div>
                  <div className="category-sub-contact">
                    <h5 className="mb-[2px] text-[16px] font-quicksand text-[#3d4750] font-semibold tracking-[0.03rem] leading-[1.2]">
                      <a href="shop-left-sidebar-col-3.html" className="font-Poppins text-[16px] font-medium leading-[1.2] tracking-[0.03rem] text-[#3d4750] capitalize">
                        Fruits
                      </a>
                    </h5>
                    <p className="font-Poppins text-[13px] text-[#686e7d] leading-[25px] font-light tracking-[0.03rem]">291 items</p>
                  </div>
                </div>
                <div
                  className="bb-category-box p-[30px] rounded-[20px] flex flex-col items-center text-center max-[1399px]:p-[20px] category-items-3 bg-[#f4f1fe]"
                  data-aos="flip-left"
                  data-aos-duration="1000"
                  data-aos-delay="600">
                  <div className="category-image mb-[12px]">
                    <img
                      src="assets/img/category/3.svg"
                      alt="category"
                      className="w-[50px] h-[50px] max-[1399px]:h-[65px] max-[1399px]:w-[65px] max-[1199px]:h-[50px] max-[1199px]:w-[50px]"
                    />
                  </div>
                  <div className="category-sub-contact">
                    <h5 className="mb-[2px] text-[16px] font-quicksand text-[#3d4750] font-semibold tracking-[0.03rem] leading-[1.2]">
                      <a href="shop-left-sidebar-col-3.html" className="font-Poppins text-[16px] font-medium leading-[1.2] tracking-[0.03rem] text-[#3d4750] capitalize">
                        Cold Drinks
                      </a>
                    </h5>
                    <p className="font-Poppins text-[13px] text-[#686e7d] leading-[25px] font-light tracking-[0.03rem]">49 items</p>
                  </div>
                </div>
                <div
                  className="bb-category-box p-[30px] rounded-[20px] flex flex-col items-center text-center max-[1399px]:p-[20px] category-items-4 bg-[#fbf9e4]"
                  data-aos="flip-left"
                  data-aos-duration="1000"
                  data-aos-delay="800">
                  <div className="category-image mb-[12px]">
                    <img
                      src="assets/img/category/4.svg"
                      alt="category"
                      className="w-[50px] h-[50px] max-[1399px]:h-[65px] max-[1399px]:w-[65px] max-[1199px]:h-[50px] max-[1199px]:w-[50px]"
                    />
                  </div>
                  <div className="category-sub-contact">
                    <h5 className="mb-[2px] text-[16px] font-quicksand text-[#3d4750] font-semibold tracking-[0.03rem] leading-[1.2]">
                      <a href="shop-left-sidebar-col-3.html" className="font-Poppins text-[16px] font-medium leading-[1.2] tracking-[0.03rem] text-[#3d4750] capitalize">
                        Bakery
                      </a>
                    </h5>
                    <p className="font-Poppins text-[13px] text-[#686e7d] leading-[25px] font-light tracking-[0.03rem]">08 items</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
