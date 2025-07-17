import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Detail from './Detail.jsx'

// let i=0
function Test() {
  //state 선언 방법. use****같은 react hook (react 내장 함수)들이 많이 있다.
  // const [변수명, 변경함수]=useState(초기값);
  const [board, setBoard]=useState([
    {
      title:'React',
      date:'2025-07-16',
      content:'React is...',
      likes:0,
    },
    {
      title:'HTML',
      date:'2025-07-16',
      content:'HTML is...',
      likes:10,
    },
    {
      title:'CSS',
      date:'2025-07-16',
      content:'CSS is...',
      likes:100,
    },
  ])
  const [show, setShow] = useState(false)
  const [boardIdx, setBoardIdx]=useState(0)
  const [newBoard, setNewBoard]=useState({
    title:'',
    date:'',
    content:'',
    likes:'',
  })
  console.log(board)
  console.log(newBoard)

  function test(){
    console.log('test')
  }
  return (
    <div className='App'>
      <nav>
        <h3 className="게시판">게시판</h3>
      </nav>
      {
        board.map((_, i) => {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => {
                setShow(!show)
                setBoardIdx(i)
              }}>{board[i].title}<button onClick={(e) => {
                e.stopPropagation()
                board[i].likes+=1
                setBoard([...board])
              }}>좋아요</button> {board[i].likes} </h4>
              <p>2025-07-16</p>
              <button onClick={()=>{
                board.splice(i, 1)
                setBoard([...board])
              }}>삭제</button>
            </div>
          )
        })
      }

      {show ? <Detail
        boardIdx={boardIdx} 
        board={board}
        color="grey"
        test={test}
      /> : null} 
      <br/>
      <input type='text' value={newBoard.title} onChange={(e)=>{
        newBoard.title=e.target.value
        setNewBoard({...newBoard})
      }}/><br/>
      <textarea value={newBoard.content} onChange={(e)=>{
        newBoard.content=e.target.value
        console.log(e.target.value)
        console.log(newBoard.content)
        setNewBoard({...newBoard})
        // console.log('!!', newBoard.content)
      }}></textarea><br/>
      <button onClick={()=>{
        console.log('newBoard title:', newBoard.title)
        console.log('newBoard content:', newBoard.content)
        if (newBoard.title===''){
          alert('제목을 입력하세요.')
          return
        }
        if (newBoard.content===''){
          alert ('내용을 입력하세요.')
          return
        }
        newBoard.likes=0
        console.log('newBoard1:', newBoard)
        setNewBoard({...newBoard})
        console.log('newBoard2:', newBoard)
        // board.push(newBoard)
        let _board = [...board, newBoard]
        console.log('board:', _board)
        // board.unshift(newBoard)
        setBoard(_board)
        // newBoard.title=''
        // newBoard.content=''
      }}>글작성</button>
    </div>
  )
}
export default Test