# useRef hook

If you want to manipulate data in javaSript we use `getElementByID` and so on which renders the entire **DOM element** again and again.

In React using state(`useState`) which also re-renders the value of the component.

Using `useRef` you can store the reference of **element** , pass into the component as child and can do manipulation. 
In useRef, the DOM element never re-renders. useRef returns a **mutable ref object** which has property `.current`

## Using useRef
```javaScript
   import React, { useRef } from "react";

  const x = useRef();

```
If you do `console.log(x)` which gives object ![Screenshot from 2021-04-09 02-18 (1)](https://user-images.githubusercontent.com/56266493/114098079-80714280-98de-11eb-9a83-ba2945e34373.png)


If you gives reference to useRef like input `<input ref={x} type="number"/>` gives ![Screenshot from 2021-04-09 02-18](https://user-images.githubusercontent.com/56266493/114098305-cb8b5580-98de-11eb-8579-aec6739ac815.png)

Lets just do `console.log(x.current)` which gives ![Screenshot from 2021-04-09 02-19 (2)](https://user-images.githubusercontent.com/56266493/114098594-3046b000-98df-11eb-9cdb-611035b40753.png)

## Output of the code
before clicking on **button One**![Screenshot from 2021-04-09 02-19 (1)](https://user-images.githubusercontent.com/56266493/114098706-5cfac780-98df-11eb-913f-88acd1a93caa.png)

after clicked on **button One**![Screenshot from 2021-04-09 02-19](https://user-images.githubusercontent.com/56266493/114098766-769c0f00-98df-11eb-9a06-041933289f04.png)



