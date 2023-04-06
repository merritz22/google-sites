<script setup></script>

<template>
    <div>
        <section class="page-section">
            <div class="container">
                <div class="product-item">
                    <div class="product-item-title d-flex">
                        <div class="bg-faded p-5 d-flex ms-auto rounded">
                            <h2 class="section-heading mb-0">
                                <span class="section-heading-upper">Blended to Perfection</span>
                                <span class="section-heading-lower">Coffees & Teas</span>
                            </h2>
                        </div>
                    </div>
                    <img class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" 
                    src="@/assets/themes/business/img/products-01.jpg" alt="..." />
                    <div class="product-item-description d-flex me-auto">
                        <div class="bg-faded p-5 rounded">
                            <p class="mb-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quod harum placeat quidem quasi, ullam velit praesentium quae deleniti nihil, sed eos architecto obcaecati ducimus porro illum sequi, natus molestias?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="page-section">
            <div class="container">
                <div class="product-item">
                    <div class="product-item-title d-flex">
                        <div class="bg-faded p-5 d-flex me-auto rounded">
                            <h2 class="section-heading mb-0">
                                <span class="section-heading-upper">Delicious Treats, Good Eats</span>
                                <span class="section-heading-lower">Bakery & Kitchen</span>
                            </h2>
                        </div>
                    </div>
                    <img class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" 
                    src="@/assets/themes/business/img/products-02.jpg" alt="..." />
                    <div class="product-item-description d-flex ms-auto">
                        <div class="bg-faded p-5 rounded">
                            <p class="mb-0">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur et, doloremque sit maxime alias nulla adipisci optio ducimus porro, officia enim. Nobis veritatis optio quibusdam dolorem magnam? Architecto, iure. Et.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="page-section">
            <div class="container">
                <div class="product-item">
                    <div class="product-item-title d-flex">
                        <div class="bg-faded p-5 d-flex ms-auto rounded">
                            <h2 class="section-heading mb-0">
                                <span class="section-heading-upper">From Around the World</span>
                                <span class="section-heading-lower">Bulk Speciality Blends</span>
                            </h2>
                        </div>
                    </div>
                    <img class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" 
                    src="@/assets/themes/business/img/products-03.jpg" alt="..." />
                    <div class="product-item-description d-flex me-auto">
                        <div class="bg-faded p-5 rounded">
                            <p class="mb-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde mollitia accusamus inventore molestias sit provident maxime recusandae, dolorem optio itaque ipsum eveniet! Nobis tempora ipsa explicabo perspiciatis suscipit repellat ex!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
@media (min-width: 992px) {
  .product-item .product-item-title {
    position: relative;
    z-index: 1;
    margin-bottom: -3rem;
  }
  .product-item .product-item-img {
    position: relative;
    z-index: 0;
    max-width: 60vw;
  }
  .product-item .product-item-description {
    position: relative;
    z-index: 1;
    margin-top: -3rem;
    max-width: 50vw;
  }
}

</style>