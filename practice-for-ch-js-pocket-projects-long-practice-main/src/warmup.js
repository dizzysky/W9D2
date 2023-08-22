const partyHeader = document.getElementById('party');
console.log(partyHeader);
export const htmlGenerator = (string, htmlElement) => {
    const pMaker = document.createElement("p");
    pMaker.innerHTML = string;
    htmlElement.appendChild(pMaker);
};

htmlGenerator('Party Time.', partyHeader);
htmlGenerator("I <3 Vanilla DOM manipulation", partyHeader);
