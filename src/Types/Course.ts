export interface CourseType{
    courseKey: string,
    author : string,
    image : string,
    avatarAuthor : string,
    description : string,
    specialization : Array<string>,
    Title : string,
}

export interface ModuleType {
    courseKey: string,
    moduleKey: string,
    name: string,
    lessons: Array<Lessons>
}

export interface Lessons{
    lessonKey: string,
    moduleKey: string,
    title: string,
    commentKey: string,
    videosource: string
}

export interface CommentType {
    commentKey: string,
    lessonKey: string,
    autorName: string,
    comment: string,
    likes: number,
    dislikes: number
}