************************************************************************************************
Topic Covered in this project:
    1) Components, props 
    2) handling List as a props 
    3) useState() hooks
    4) useRef()
    5) condititional rendering
    6) working with arrays and list
    7) Custom Button components
    8) useContext()
************************************************************************************************
CSS design to devide page into fixed width and height:

App.css:
    .container {
        height: 100dvh;
        width: 100wh;
        display: flex;
        }

App.js (25% and 75%):
    <div className="container">
      <SideBar style={{ flex: "0 0 25%;" }} />
      <div style={{ flex: "1" }}></div>
    </div>

************************************************************************************************
Concatinating values with array:

  const [tasks, setTasks] = useState([]);
  const taskData = useRef();

  function addTaskHandler() {
    setTasks((prev) => [...tasks, taskData.current.value]);
  } 

************************************************************************************************
Deleteing an element from array:
      const deleteTaskHandler = (index) => {
            setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
        };


************************************************************************************************
ProjectContext.js:
-> This is Context file where we will store common value which will be access from different Components.

Return type of ProjectContext.js:
    <ProjectContext.Provider value={{ projectState, setProjectState }}>
      {children}
    </ProjectContext.Provider>  

-> The reason we are returning ProjectContext loke above so that we just have to provide 
      <ProjectProvider> 
      ...  Child components....
      </ProjectProvider>
      
Reason of Using in index.js rather using inside App.js:
    <ProjectProvider>
      <App />
    </ProjectProvider>

-> useContext() which we have used inside App.js can be used only inside Children components only..
      <ProjectProvider> 
      ...  Child components....
      </ProjectProvider>

************************************************************************************************





************************************************************************************************







************************************************************************************************






************************************************************************************************







************************************************************************************************








************************************************************************************************