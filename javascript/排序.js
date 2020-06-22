var arr= [2,4,1,6,7,3]

//快速排序，找一个基准值，比它小的放在它前面比它大的放在它后面
function  quickSort (array) {
	var len = array.length;//数组长度
	if (len <= 1) {//数组长度为1，则本身就是有序的
		return array;
	}
	var pivot    = array[0];//选第一个元素为基准 
	var leftArr  = [];//存储比基准小的元素
	var rightArr = [];//存储比基准答得元素
	for(var i = 1; i < len; i ++) {
		if (array[i] < pivot) {
			leftArr.push(array[i]);
		} else {
			rightArr.push(array[i]);
		}
	}
	return quickSort(leftArr).concat(pivot,quickSort(rightArr));
}

console.log(quickSort(arr))

// var a = [
//   { idx: 20,  otherInfo: {} },
//   { idx: 3,  otherInfo: {} },
//   { idx: 0,  otherInfo: {} },
//   { idx: 11,  otherInfo: {} },
//   { idx: 78,  otherInfo: {} },
//   { idx: 12,  otherInfo: {} },
//   { idx: 40,  otherInfo: {} },
//   { idx: 7,  otherInfo: {} }
// ];

// function cmp(a,b){
// 	return a.idx - b.idx
// }

// a.sort(cmp)
// console.log(a)

// var arr = [3,4,'3',2,6,5,9]
// //冒泡算法
// function bubbleSort(arr) {
//     var len = arr.length;
//     for (var i = 0; i < len - 1; i++) {
//         for (var j = 0; j < len - 1 - i; j++) {
//             if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
//                 var temp = arr[j+1];        // 元素交换
//                 arr[j+1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }	
// console.log(bubbleSort(arr))

// //选择排序
// function selectionSort(arr) {
//     var len = arr.length;
//     var minIndex, temp;
//     for (var i = 0; i < len - 1; i++) {
//         minIndex = i;
//         for (var j = i + 1; j < len; j++) {
//             if (arr[j] < arr[minIndex]) {     // 寻找最小的数
//                 minIndex = j;                 // 将最小数的索引保存
//             }
//         }
//         temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp;
//     }
//     return arr;
// } 
// console.log(selectionSort(arr))	

// //插入排序
// function insertionSort(arr) {
//     var len = arr.length;
//     var preIndex, current;
//     for (var i = 1; i < len; i++) {
//         preIndex = i - 1;
//         current = arr[i];
//         while (preIndex >= 0 && arr[preIndex] > current) {
//             arr[preIndex + 1] = arr[preIndex];
//             preIndex--;
//         }
//         arr[preIndex + 1] = current;
//     }
//     return arr;
// }
// console.log(insertionSort(arr))

// //希尔排序
// function shellSort(arr) {
//     var len = arr.length;
//     for (var gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
//         // 注意：这里和动图演示的不一样，动图是分组执行，实际操作是多个分组交替执行
//         for (var i = gap; i < len; i++) {
//             var j = i;
//             var current = arr[i];
//             while (j - gap >= 0 && current < arr[j - gap]) {
//                  arr[j] = arr[j - gap];
//                  j = j - gap;
//             }
//             arr[j] = current;
//         }
//     }
//     return arr;
// }
// console.log(shellSort(arr))

// //归并排序
// function mergeSort(arr) {
//     var len = arr.length;
//     if (len < 2) {
//         return arr;
//     }
//     var middle = Math.floor(len / 2),
//         left = arr.slice(0, middle),
//         right = arr.slice(middle);
//     return merge(mergeSort(left), mergeSort(right));
// }
 
// function merge(left, right) {
//     var result = [];
 
//     while (left.length>0 && right.length>0) {
//         if (left[0] <= right[0]) {
//             result.push(left.shift());
//         } else {
//             result.push(right.shift());
//         }
//     }
 
//     while (left.length)
//         result.push(left.shift());
 
//     while (right.length)
//         result.push(right.shift());
 
//     return result;
// }
// console.log(mergeSort(arr))

// //快速排序
// function quickSort(arr, left, right) {
//     var len = arr.length,
//         partitionIndex,
//         left = typeof left != 'number' ? 0 : left,
//         right = typeof right != 'number' ? len - 1 : right;
 
//     if (left < right) {
//         partitionIndex = partition(arr, left, right);
//         quickSort(arr, left, partitionIndex-1);
//         quickSort(arr, partitionIndex+1, right);
//     }
//     return arr;
// }
 
// function partition(arr, left ,right) {     // 分区操作
//     var pivot = left,                      // 设定基准值（pivot）
//         index = pivot + 1;
//     for (var i = index; i <= right; i++) {
//         if (arr[i] < arr[pivot]) {
//             swap(arr, i, index);
//             index++;
//         }       
//     }
//     swap(arr, pivot, index - 1);
//     return index-1;
// }
 
// function swap(arr, i, j) {
//     var temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }
