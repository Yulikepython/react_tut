import React from "react"

function ToDo(){
    return (
        <div>
            <form method="post">
                <input type="checkbox" name="todo" value="1" />
                <p>place hoder here</p>
                <input type="checkbox" name="todo" value="2" />
                <p>place hoder here</p>
                <input type="checkbox" name="todo" value="3" />
                <p>place hoder here</p>
                <input type="submit" value="送信する" />
            </form>
        </div>
    )
}

export default ToDo