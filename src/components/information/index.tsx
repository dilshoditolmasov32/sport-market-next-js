
const Index = () => {
    const data=[
        {
            title:"Как правильно выбрать эллиптический тренажер?",
            text:"Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки..."
        },
        {
            title:"Как правильно выбрать эллиптический тренажер?",
            text:"Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки..."
        },
        {
            title:"Как правильно выбрать эллиптический тренажер?",
            text:"Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки..."
        },
        {
            title:"Как правильно выбрать эллиптический тренажер?",
            text:"Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки..."
        },
        {
            title:"Как правильно выбрать эллиптический тренажер?",
            text:"Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки..."
        },
        {
            title:"Как правильно выбрать эллиптический тренажер?",
            text:"Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки..."
        },
        {
            title:"Как правильно выбрать эллиптический тренажер?",
            text:"Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки..."
        },
        {
            title:"Как правильно выбрать эллиптический тренажер?",
            text:"Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки..."
        },
    ]
  return (
    <>
    <div>
        <div className="container">
            <div className="flex gap-6">
                {
                    data?.map((item, index)=>(
                        <div key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default Index