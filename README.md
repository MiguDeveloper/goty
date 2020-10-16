# Project Game of the year

Proyecto de `Angular` con `Firebase/Firestore` y trabajo con data en tiempo real(sockets)

### Importante cuando se usa `interval`

Siempre que se abre un setInterval hay que limpiarlo sino seguira ejecutandose

```javascript
intervalo;

this.intervalo = setInterval(() => {
  const nuevoResults = [...this.results];
  nuevoResults.forEach((item) => {
    const valor = Math.round(Math.random() * 500);
    item.value = valor;
  });
  this.results = [...nuevoResults];
}, 1500);

ngOnDestroy() {
    clearInterval(this.intervalo);
}
```
