export default function Compact(){
  return(
    <>
      <form>
      <fieldset className="uwezo">
      <legend><i>Would you like a water tank with your greenhouse:</i></legend>
      
   <div className="bonya">
        <input type='radio' id="500l"/>
        <label for='500l'>500L</label>
        
        
       
        <input type='radio' id="1000l"/>
          <label for='1000l'>1000L</label>
        
        
        
        <input type='radio' id="2500l"/>
          <label for='2500l'>2500L</label>
        
        
        
        <input type='radio' id="none"/>
          <label for='none'>None</label>
    </div>
        
        </fieldset>
        </form>
    </>
  )
};