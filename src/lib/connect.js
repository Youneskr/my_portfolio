import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = sanityClient ({
    projectId : '8a8z1p75',
    dataset : 'production',
    apiVersion : '2022-08-25',
    useCdn : true,
    token : process.env.PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client)

//  Access to urls where imgs are store
export const urlFor = (source) => builder.image(source)