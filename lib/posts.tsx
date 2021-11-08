import fs, {promises as fsPromise} from 'fs'
import path from "path";
import matter from 'gray-matter'

const markdownDir = path.join(process.cwd(), 'markdown')

export const getPosts = async() => {
    const fileNames = await fsPromise.readdir(markdownDir)
    const posts = fileNames.map(filename =>{
        const id = filename.replace(/\.md$/g, '')
        const fullPath = path.join(markdownDir, filename)
        const text = fs.readFileSync(fullPath, 'utf-8')
        const {data:{title, date}, content} = matter(text)
        return {
            id, title, date, content
        }
    })
    return posts;
}

export const getPost = async(id: string) =>{
    const fullPath = path.join(markdownDir, id + '.md')
    const text = fs.readFileSync(fullPath, 'utf-8')
    const {data:{title, date}, content} = matter(text)
    return JSON.parse(JSON.stringify({
        id, title, date, content
    }))
}

export const getPostIds = async() =>{
    const fileNames = await fsPromise.readdir(markdownDir)
    return fileNames.map(fileName => fileName.replace(/\.md$/g, ''))
}