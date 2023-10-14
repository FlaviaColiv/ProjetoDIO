import { useState } from "react";
import { Card } from "./components/Card";
import themes, { language } from "./data"
import { aiRequest } from "./services/openai.config";

function App() {

  const [theme, setTheme] = useState("");
  
  async function handleClikTheme (message) {
    const response = await aiRequest(message);
    setTheme(response.data.choices(0).text);
  }

  return (
    <section className="grid place-content-center w-full"> 
    <h1 className="text-amber-400 text-5xl font-bold grid-cols-1 py-10 text-center">{language}</h1>   

    {
      theme ? () : ()
    }
    <div className="grid grid-cols-4 gap-10 px-32">
       {themes.map((theme, idx) => (
      <Card key={idx} title={theme.name} onClick={() => handleClikTheme(theme.message)} />
    ))}
    </div>
    </section>
  );
}

export default App;
