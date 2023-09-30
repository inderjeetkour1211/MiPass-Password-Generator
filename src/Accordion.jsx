import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

const Accordion = () => {

 
    const list = [
        {
            title: "What is a password generator app?",
            tabContent : "A password generator app is a tool that helps users create strong and secure passwords. It generates random combinations of characters, including letters, numbers, and special symbols, making it difficult for unauthorized users to guess or crack.",
            id:1 ,

        },
        {
            title: " Why should I use a password generator app?",
            tabContent : "Using a password generator app ensures that your passwords are strong and complex, reducing the risk of unauthorized access to your accounts. It also saves time by automating the process of creating secure passwords.",
            id:2

        },
        {
            title: "How does the password generator app work?",
            tabContent : "The app uses algorithms to generate random strings of characters based on user-defined preferences, such as length, inclusion of numbers, and special symbols. These generated passwords are designed to be highly secure." ,
            id:3

        },
        {
            title: "Can I customize the generated passwords?",
            tabContent : "Yes, most password generator apps allow you to customize the generated passwords by specifying parameters like length, inclusion of numbers, special symbols, and more. This gives you control over the level of security you desire." ,
            id:4

        },
        {
            title: "Are the generated passwords stored anywhere?",
            tabContent : "No, reputable password generator apps do not store the generated passwords. The process is typically done locally on your device, ensuring that the generated passwords remain private and secure." ,
            id:5

        },

        {
            title: "How do I ensure I don't lose the generated password?",
            tabContent : "After generating a password, it's important to copy it and store it in a secure location, such as a password manager or a physical notebook. Some apps also have a copy-to-clipboard feature for easy access." ,
            id:6
        },

    ]  
    const [tabContents, setTabContents] = useState(
        Array(list.length).fill(false)
      );
     
    const handleClick = (index) => {
        setTabContents((prevContents) => {
          const newContents = [...prevContents];
          newContents[index] = !newContents[index];
          return newContents;
        });
      }; 
    return (
       
        <div className="dark:bg-black ">
            <div className="max-w-5xl px-4 py-20 mx-auto w-full justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center border-red-700 dark:text-white">
            Frequently asked questions
          </h2>
          <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg">
            <div>
              <ul>
                {list.map(({ title, tabContent, id }, index) => (
                  <li key={id} className="pb-5 border-b-2 border-gray-400">
                    <div className="flex justify-between">
                      <h3 className="py-5 font-bold text-xl sm:text-2xl dark:text-white hover:text-red-700">
                        {title}
                      </h3>
                      <div className="mt-6 flex justify-center items-center w-7 h-7  sm:w-7 sm:h-7 text-white bg-red-600 hover:bg-red-700 rounded-full">
                        <button
                          onClick={() => handleClick(index)}
                          className="text-ms sm:text-xl"
                        >
                          <AiOutlinePlus />
                        </button>
                      </div>
                    </div>
                    {tabContents[index] && <p className="dark:text-white ">{tabContent}</p>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        </div>
     
      );
    };
    
    export default Accordion;
