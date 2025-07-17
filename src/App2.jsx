import { useRef, useState } from "react";

function App2() {
  const [board, setBoard] = useState([
      {
        title : 'React',
        date : '2025-07-15',
        like : 0
      },
      {
        title : 'HTML',
        date : '2025-07-16',
        like : 0
      },
      {
        title : 'CSS',
        date : '2025-07-13',
        like : 0
      },
    ]);
  const [newTitle, setNewTitle] = useState('');
  const refNew = useRef();

  return (
    <div>
      {
        board.map((data, i) => {
          return (
            <div className="list" key={i}>
              <h4>
                {data.title}
                <span onClick={() => {
                  let _board = [...board];
                  _board[i].like = _board[i].like + 1

                  setBoard( _board)

                }}>👍</span><span>{data.like}</span>
              </h4>
              <p>{data.date}</p>
              <button onClick={() => {
                let _board = [...board];
                _board.splice(i, 1);

                setBoard(_board);
              }}>삭제</button>
            </div>
          )
        })
      }

      <input ref={refNew} type="text" onChange={(e) => {
        setNewTitle(e.target.value);
        // setNewTitle(refNew.current.value)
      }} />
      <button onClick={() => {
        let now = new Date();
        let date = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();

        let newData = {
          title: refNew.current.value,
          date: date,
          like: 0
        }
        console.log(newData);
        let _board = [...board];
        _board.push(newData);

        setBoard(_board);

        refNew.current.value = '';

      }}>추가</button>
    </div>
  );
}

export default App2;