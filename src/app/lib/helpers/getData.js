export async function getData({ query, variables }, refetch = false) {
  try {
    const bodyContent = JSON.stringify({
      query,
      variables,
      refetch,
    });

    const res = await fetch(`${process.env.NEXT_PUBLIC_ROOT_URL}/api/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: bodyContent,
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Fetching data failed:", error);
    // Handle the error as needed
    return null; // Or your preferred error handling
  }
}

export async function postData({ query, variables }) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ROOT_URL}/api/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });
    if (!res.ok) {
      const error = await res.text();
      throw new Error(`Network response was not ok: ${error}`);
    }
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error; // re-throw the error so it can be caught higher up
  }
}
