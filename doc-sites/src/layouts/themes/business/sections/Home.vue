<script setup></script>

<template>
    <div>
        <section class="page-section clearfix">
            <div class="container">
                <div class="intro">
                    <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" 
                    src="@/assets/themes/business/img/intro.jpg" alt="..." />
                    <div class="intro-text left-0 text-center bg-faded p-5 rounded
                    bg-opacity-75">
                        <h2 class="section-heading mb-4">
                            <span class="section-heading-upper">Facultes des sciences</span>
                            <span class="section-heading-lower">La cafeine</span>
                        </h2>
                        <p class="mb-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ratione facilis magni repellat, porro velit dolores eum quibusdam ex labore reprehenderit temporibus corporis officia culpa. Labore quaerat expedita amet non!
                        </p>
                        <div class="intro-button mx-auto">
                            <a class="btn btn-xl p-3 text-dark" href="#!">Voir Mes travaux</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="page-section cta">
            <div class="container">
                <div class="row">
                    <div class="col-xl-9 mx-auto">
                        <div class="cta-inner bg-faded bg-opacity-10 text-center rounded">
                            <h2 class="section-heading mb-4">
                                <span class="section-heading-upper">Mes Objectifs</span>
                                <span class="section-heading-lower">To You</span>
                            </h2>
                            <p class="mb-0">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia rerum eligendi beatae animi totam sunt quod maiores id. Eius vel quia, labore neque a provident temporibus quod ab quis impedit.
                                Laboriosam, atque hic? Ratione suscipit cupiditate similique, earum incidunt perferendis! Hic ipsa numquam, odio rerum officia consequuntur delectus doloribus, pariatur cumque fugiat ratione quia, debitis officiis magnam. Sunt, libero quaerat!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>

.page-section {
  margin-top: 5rem;
  margin-bottom: 5rem;
}

.section-heading {
  text-transform: uppercase;
}
.section-heading .section-heading-upper {
  display: block;
  font-size: 1rem;
  font-weight: 800;
}
.section-heading .section-heading-lower {
  display: block;
  font-size: 3rem;
  font-weight: 100;
}

.cta {
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: rgba(230, 167, 86, 0.9);
}
.cta .cta-inner {
  position: relative;
  padding: 3rem;
  margin: 0.5rem;
  border: 0.35rem solid rgba(245, 182, 101, 0.85);
}
.cta .cta-inner:before {
  border-radius: 0.5rem;
  content: "";
  position: absolute;
  top: -0.5rem;
  bottom: -0.5rem;
  left: -0.5rem;
  right: -0.5rem;
  border: 0.35rem solid rgba(245, 182, 101, 0.85);
  z-index: -1;
}

.bg-faded{
    background-color: rgb(245, 209, 159);
}

.intro {
  position: relative;
}
@media (min-width: 992px) {
  .intro .intro-img {
    width: 75%;
    float: right;
  }
  .intro .intro-text {
    left: 0;
    width: 60%;
    margin-top: 3rem;
    position: absolute;
  }
  .intro .intro-text .intro-button {
    width: 100%;
    left: 0;
    position: absolute;
    bottom: -2rem;
  }
}
@media (min-width: 1200px) {
  .intro .intro-text {
    width: 45%;
  }
}

.intro-button a{
  background-color: rgba(230, 167, 86);
}

</style>