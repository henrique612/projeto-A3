export interface CourseType{
    courseKey: string,
    autor : string,
    image : string,
    avatarAutor : string,
    description : string,
    specialization : Array<string>,
    Title : string,
    courseId : string,
}

export interface Lessons{
    lessonKey: string
    module: string,
    title: string,
    commentKey: string,
    videoKey: string
}
