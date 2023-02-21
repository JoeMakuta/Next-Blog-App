import { useRouter } from "next/router";

const Docs = () => {
  const { params = [] } = useRouter().query;

  if (params.length === 1) {
    return (
      <div>
        <h1>Docs for {params[0]}</h1>
      </div>
    );
  } else if (params.length === 2) {
    return (
      <div>
        <h1>
          Docs for {params[0]} at {params[1]}
        </h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Docs for the blog app</h1>
    </div>
  );
};

export default Docs;
