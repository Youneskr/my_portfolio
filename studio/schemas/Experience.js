export default {
    name : 'experience',
    title : 'Experience',
    type : 'document',
    fields : [
        {
            name : 'name',
            title : 'Name',
            type : 'string',
        },
        {
            name : 'time_in',
            title : 'Date de debut',
            type : 'string'
        },
        {
            name : 'time_out',
            title : 'Date de la fin',
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