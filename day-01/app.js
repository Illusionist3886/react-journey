const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", {key: "grandParent"},
            [
                React.createElement("div", {key: "parent-one", className: "parent"}, [
                    React.createElement("h1", { key: "heading" }, "Hello World!"),
                    React.createElement("p", { key: "paragraph" }, "This is Paragraph")
                ]),
                React.createElement("div", {className: "wrapper"}, 
                    [
                        React.createElement("div", {className: "parent"}, [
                            React.createElement("h1", {className: "parent-title"}, "I am parent."),
                            React.createElement("p", {}, "Barir Korta.")
                        ]),
                        React.createElement("div", {className: "parent-two"}, [
                            React.createElement("h1", {className: "parent-title"}, "I am parent two."),
                            React.createElement("p", {}, "Barir Second Korta.")
                        ])

                    ]
                )
                
            ]
)

root.render(parent)