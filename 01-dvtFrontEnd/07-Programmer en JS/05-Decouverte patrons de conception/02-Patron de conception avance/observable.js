const { Observable } = rxjs;
const observable = new Observable((observer) => {
  const intervalId = setInterval(() => {
    const random = Math.random();
    observer.next(random);
  }, 1000);

  return () => {
    clearInterval(intervalId);
  };
});

observable.subscribe((value) => {
  console.log(value);
});