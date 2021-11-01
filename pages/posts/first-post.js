import React, {useCallback} from 'react'
import Link from 'next/link'
import styles from 'styles/first-post.module.css'

export default function FirstPost(){
  const clickMe = useCallback(()=>{
    console.log('you click me')
  }, [])
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          内容
        </div>
      </div>
    </>
  )
}
