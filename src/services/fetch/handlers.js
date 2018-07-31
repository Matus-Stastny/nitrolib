// @flow strict
export async function handleError(res: Response): Promise<Response> {
  if (!res.ok) {
    const data = await res.json();

    return Promise.reject(
      new Error({
        status: res.status,
        statusText: res.statusText,
        data,
      }),
    );
  }

  return res;
}

export async function handleJSON<T>(res: Response): Promise<T> {
  const data = await handleError(res).then(r => r.json());

  // Our API convention
  if (data.error_code) {
    return Promise.reject(new Error(data.message));
  }

  return data;
}