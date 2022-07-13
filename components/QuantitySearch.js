// fetch from localhost:3000/api/hello

 const fetchFromApi = async () => {
    const res = await fetch('/api/hello');
    const data = await res.json();
    return data;
    };

    const results = fetchFromApi();
    // console.log(result);
 
    export default function Search () {
        return (
          <div className="container">
              <title>Next + Contentful Starter</title>
              <link rel="icon" href="/favicon.ico" />
            <main>
                <h1>Hello</h1>
                <p>{results}</p>
            </main>
          </div>
      )};
    