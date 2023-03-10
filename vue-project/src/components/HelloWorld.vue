<template>
  <div>
    <Nav :navLinks="navLinks" :navConfig="navConfig" :btnConfig="btnConfig">
      <img class="img" src="logo" alt="" srcset="" /> <!-- A slot For your project Logo -->
    </Nav>
  </div>
</template>

<script>
import Nav from "vue-nav-ui";

export default {
  components: {
    Nav,
  },
  data(){
        return {
            /* FOR YOUR NAVIGATION LINKING NAMES AND PATHS */ 
            navLinks: [
                {
                    name: "Home",
                    path: "/",
                },
                {
                    name: "About",
                    path: "/about",
                },
                {
                    name: "FAQs",
                    path: "/faqs",
                },
                {
                    name: "More",
                    path: "/more",
                },
                {
                    name: "Media",
                    path: "/media",
                },
            ],
            navConfig: {
                whitespace: true, /* GIVES PADDING TO YOUR NAV, IF SET TO FALSE, REMOVES PADDING */
                navBg: "#FAFAFA", /* BACKGROUND COLOR OF YOUR NAV  */
                navBorderRadius: "30px", /* BORDER RADIUS OF YOUR NAV */
                linkFont: "poppins", /* FONT FAMILY OF YOUR NAV */
                linkColor: "black", /* FONT COLOR OF YOUR NAV */
                responsivePosition: "top or bottom", /* FOR CHANGING THE POSITION OF YOUR NAV WHEN RESPONSIVE. BOTTOM or TOP | The only two options */
            },
            btnConfig: {
                btnLink: true, /* FOR INITIALIZING NAV BUTTON USAGE, IF SET TO FALSE, REMOVES THE NAV BUTTON  */
                btnUrl: "https://dhaniel.disha.page", /* LINK URL OF YOUR NAV BUTTON */
                btnText: "Download app", /* NAV BUTTON TEXT */
                btnBg: "#40269E", /* BACKGROUND COLOR OF YOUR NAV BUTTON  */
                btnTextColor: "white", /* FONT COLOR OF YOUR NAV BUTTON*/
                btnBorderWidth: "0", /* BORDER WIDTH OF YOUR NAV BUTTON */
                btnBorderColor: "black", /* BORDER COLOR OF YOUR NAV BUTTON */
                btnBorderRadius: "20px", /* BORDER RADIUS OF YOUR NAV BUTTON */
            }
        }
    }
};
</script>