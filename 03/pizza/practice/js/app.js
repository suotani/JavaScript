var budget = prompt("所持金を入力してください");
budget = parseFloat(budget);

var isHungry = confirm("お腹は空いていますか？");

if (budget >= 1500 && isHungry) {
    alert("ピザを注文しました");
} else if (budget >= 500) {
    alert("ポテトを注文しました");
} else {
    alert("節約！");
}