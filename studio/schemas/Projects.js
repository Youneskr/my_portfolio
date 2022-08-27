export default {
    name : 'projects',
    title : 'Projects',
    type : 'document',
    fields : [
        {
            name : 'title',
            title : 'Title',
            type : 'string'
        },
        {
            name : 'url',
            title : 'Url',
            type : 'string'
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