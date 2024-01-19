function Title({ classes, text}) {
  return (
    <div className={!classes ? 'title text-center' : classes}>{!text ? 'Date' : text}</div>
  );
}

export default Title;