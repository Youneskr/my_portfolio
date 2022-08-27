export default {
    name : 'skills',
    title : 'Skills',
    type : 'document',
    fields : [
        {
            name : 'name',
            title : 'Name',
            type : 'string'
        },
        {
            name : 'slug',
            title : 'Slug',
            type : 'slug',
            options : {
                source : 'name'
            }
        },
        {
            name : 'description',
            title : 'Description',
            type : 'text'
        },
        {
            name : 'image',
            title : 'Image',
            type : 'image',
            options : {
                hotspot : true
            }
        }
    ]
}