import fs, {promises as fsPromise} from 'fs'
import path from "path";
import matter from 'gray-matter'
const getPosts = async() => {
    const markdownDir = path.join(process.cwd(), 'markdown')
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

export default getPosts;