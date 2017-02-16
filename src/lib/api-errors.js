// because Fetch doesn't recognize error responses as
// actual errors since it's technically completing the response...
export function handleApiErrors (response) {
  if (!response.ok) throw Error(response.statusText)
  return response
}
