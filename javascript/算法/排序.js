/**
 * 下面是几种排序方法的实现
 *  快速排序
 */
var arr = [3,4,'3',2,6,5,9,7,4]
/**
 * 快速排序
 * 找一个基准值，比它小的放在它前面比它大的放在它后面
 */
function  quickSort (array) {
	var len = array.length;      	//数组长度
	if (len <= 1) { 				//数组长度为1，则本身就是有序的
		return array;
	}
	var pivot    = array[0];		//选第一个元素为基准 
	var leftArr  = [];				//存储比基准小的元素
	var rightArr = [];				//存储比基准答得元素
	for(var i = 1; i < len; i ++) {
		if (array[i] < pivot) {
			leftArr.push(array[i]);
		} else {
			rightArr.push(array[i]);
		}
	}
	return quickSort(leftArr).concat(pivot,quickSort(rightArr));
}
console.log('快速排序结果：', quickSort(arr))
/**
 * 冒泡算法
 * 
 */
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
                var temp = arr[j+1];        // 元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}	
console.log('冒泡排序结果：', bubbleSort(arr))
/**
 * 选择排序算法
 * 
 */
function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     // 寻找最小的数
                minIndex = j;                 // 将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
} 
console.log('选择排序结果：', selectionSort(arr))	
/**
 * 插入排序
 * 
 */
function insertionSort(arr) {
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;
}
console.log('插入排序结果：', insertionSort(arr))
/**
 * 希尔排序
 * 
 */
function shellSort(arr) {
    var len = arr.length;
    for (var gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (var i = gap; i < len; i++) {
            var j = i;
            var current = arr[i];
            while (j - gap >= 0 && current < arr[j - gap]) {
                 arr[j] = arr[j - gap];
                 j = j - gap;
            }
            arr[j] = current;
        }
    }
    return arr;
}
console.log('希尔排序结果：', shellSort(arr))
/**
 * 
 * 归并排序
 */
function merge(left, right) {
    var result = [];
    while (left.length>0 && right.length>0) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length)
        result.push(left.shift());
    while (right.length)
        result.push(right.shift());
    return result;
}
function mergeSort(arr) {
    var len = arr.length;
    if (len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
console.log('归并排序结果：', mergeSort(arr))
/**
 * 利用sort() API进行排序
 */
var arr = [
  { idx: 20,  otherInfo: {} },
  { idx: 3,  otherInfo: {} },
  { idx: 0,  otherInfo: {} },
  { idx: 11,  otherInfo: {} },
  { idx: 78,  otherInfo: {} },
  { idx: 12,  otherInfo: {} },
  { idx: 40,  otherInfo: {} },
  { idx: 7,  otherInfo: {} }
];
function cmp(a,b){
	return a.idx - b.idx
}
arr.sort(cmp)
console.log('利用sort()API排序结果：', arr)