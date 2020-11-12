import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        shortcuts: [
            { image: "https://www.wired.com/images_blogs/underwire/2010/06/lps_3a.jpg", heading: "Release Radar", caption: "All the latest hits from your favorite artists"},
            { image: "https://images-na.ssl-images-amazon.com/images/I/611c5AgPCZL._SL1500_.jpg", heading: "TRON: Legacy", caption: "Daft Punk" },
            {
                image:
                    "https://images.squarespace-cdn.com/content/v1/5755a35501dbae3c6d1ba03e/1521050292095-HFU8V4X74U0DJSLUWULX/ke17ZwdGBToddI8pDm48kGDpvalPb1SqHoCn1hwN0Y57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmQPoRzxSr1hzN-vPBHt7YyLLXgctAyUJRqJUUGWVDK_ZzIgvsybGcZEPqUYiXY8im/Awaken_My_Love.jpg", heading: "Awaken, My Love!", caption: "Childish Gambino"
            },
            {
                image:
                    "https://img.discogs.com/VT6ZxZ3plH7sh35yFDTk84GdMew=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-15532194-1593721713-2144.jpeg.jpg", heading: "Crush", caption: "Day Wave"
            },
            { image: "https://images-na.ssl-images-amazon.com/images/I/41%2BQ7UQ0POL._SY355_.jpg", heading: "Catch Without Arms", caption: "dredg" },
        ],
        recently: [
            {
                image:
                    "https://static.billboard.com/files/media/Taylor-Swift-1989-album-covers-billboard-1000x1000-compressed.jpg", heading: "1989", caption: "Taylor Swift"
            },
            {
                image:
                    "https://static.billboard.com/files/media/Lady-Gaga-Fame-Monster-album-covers-billboard-1000x1000-compressed.jpg", heading: "Fame Monster", caption: "Lady Gaga"
            },
            {
                image:
                    "https://static.billboard.com/files/media/Fleetwood-Mac-Rumours-album-covers-billboard-1000x1000-compressed.jpg", heading: "Fleetwood Mac", "caption": "Rumours"
            },
            {
                image:
                    "https://static.billboard.com/files/media/ariana-grande-sweetner-album-art-2018-billboard-1240-compressed.jpg", heading: "Sweetner", caption: "Ariana Grande"
            },
            {
                image:
                    "https://static.billboard.com/files/media/Joy-Division-Unknown-Pleasures-album-covers-billboard-1000x1000-compressed.jpg", heading: "Joy Division", caption: "Unkown Pleasures"
            },
        ],
        madeFor: [
            {
                image:
                    "https://static.billboard.com/files/media/Nirvana-Nevermind-album-covers-billboard-1000x1000-compressed.jpg", heading: "Nirvana", caption: "Nevermind"
            },
            {
                image:
                    "https://static.billboard.com/files/media/Pink-Floyd-Dark-Side-of-the-Moon-album-covers-billboard-1000x1000-compressed.jpg", heading: "Dark Side of the Moon", caption: "Pink Floyd"
            },
            {
                image:
                    "https://static.billboard.com/files/media/The-Beatles-Abbey-Road-album-covers-billboard-1000x1000-compressed.jpg", heading: "Abbey Road", caption: "The Beatles"
            },
            {
                image:
                    "https://res-4.cloudinary.com/ybmedia/image/upload/c_scale,f_auto,q_auto,w_700/v1/m/b/4/b45c71f39f66baa5737584f143273358ba61be3f/01BobDylan.jpg", heading: "Album", caption: "Bob Dylan"
            },
            {
                image:
                    "https://res-4.cloudinary.com/ybmedia/image/upload/c_scale,f_auto,q_auto,w_700/v1/m/2/7/2770e0d9d99ee0c39a301c3c37726f2b5235b946/10DavidBowie.jpg", heading: "Album", caption: "David Bowie"
            },
        ],
    },
    mutations: {},
    actions: {},
    modules: {},
})
