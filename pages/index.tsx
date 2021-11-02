import logo from 'assets/images/desktop.png';
// 打印一下看看 logo 是什么
console.log('logo的值: ', logo); 

export default function Index() {
  return (
    <div>
      <h1>标题1</h1>
      <p>段落</p>
      <img src={logo.src} />
      <style jsx>{`
        h1{
          color: red;
        }
      `}
      </style>
    </div>
  )
}
