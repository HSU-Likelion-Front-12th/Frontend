export default function Input({ handleDisable, isDisable, setContent, handleSetLocalStorage }) {
  return (
    <>
      <input
        type="checkbox"
        onClick={() => {
          handleDisable();
          handleSetLocalStorage();
        }}
      />
      <input
        disabled={isDisable}
        onInput={(e) => { setContent(e.target.value) }}
      />
    </>
  )
}