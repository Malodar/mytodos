import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EMPTY, Observable, Subscription } from 'rxjs';


const postgrestUrl = 'http://localhost:3000/';
const djangoUrl = 'http://localhost';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public httpClient: HttpClient
  ) { }

  public django_post(params, url){
    let queryurl = `${djangoUrl}${url}`;
    return this.httpClient.post(queryurl, params);
  };

//   public django_get(url){
//     let queryurl = `${djangoUrl}${url}`;
//     return this.httpClient.get(queryurl);
//   };

//   public checkIfExist(query, tablename){    
//     return this.get_items_from_db(tablename, query);     
//   };

//   public saveNamedColState(tableName, userAgent, stateName, arr){
//     let url = `${postgrestUrl}named_states`;
//     this.httpClient.post(url, {
//       useragent: userAgent,
//       state_name: stateName,
//       tablename: tableName,
//       gridcolumnsettings: arr      
//     }).subscribe(
//       data => {
//       },
//       error => {        
//       }
//     );
//   }

//   public get_items_from_db(tableName: string, query: string = ''): Observable<any> {
//     const url = postgrestUrl + tableName + query;
//     return this.httpClient.get(url);
//   };

//   public saveDataToDB(tableName: string, params: any): Observable<any> {
//     const url = `${postgrestUrl}${tableName}`;
//     return this.httpClient.post(url, params, {observe: 'response'});
//   };

//   public delete_from_db(tableName: string, query: string){
//     const url = `${postgrestUrl}${tableName}${query}`
//     return this.httpClient.delete(url, {observe: 'response'});
//   }

//   public updateDataInDB(tableName: string, query: string = '', params){
//     const url = postgrestUrl + tableName + query;
//     return this.httpClient.patch(url, params)
//   }

//   public getRowData(table: string, filterArr: object): Observable<any> {
//     let httpOptions;
//     let httpParams = new HttpParams();
//     if (Object.keys(filterArr).length > 0) {
//       for (const f in filterArr) {
//         if (filterArr.hasOwnProperty(f)) {
//           if (filterArr[f]['filterType'] === 'date') {
//             if (filterArr[f]['type'] === 'inRange') {
//               httpParams = httpParams.append('and', `(${f}.gte.${filterArr[f]['dateFrom'].split(' ')[0]},${f}.lte.${filterArr[f]['dateTo'].split(' ')[0]})`);
//             } else {
//               httpParams = httpParams.append(f, `${operators[filterArr[f]['type']]}.${filterArr[f]['dateFrom'].split(' ')[0]}`);
//             }
//           }
//           else if (filterArr[f]['filterType'] === 'number') {
//             if (filterArr[f]['type'] === 'inRange') {
//               httpParams = httpParams.append('and', `(${f}.gte.${filterArr[f]['filter']},${f}.lte.${filterArr[f]['filterTo']})`);
//             } else {
//               httpParams = httpParams.append(f, `${operators[filterArr[f]['type']]}.${filterArr[f]['filter']}`);
//             }
//           }
//           else {
//             if (filterArr[f]['type'] === 'startsWith') {
//               httpParams = httpParams.append(f, `ilike.${filterArr[f]['filter']}*`);
//             }
//             else if (filterArr[f]['type'] === 'endsWith') {
//               httpParams = httpParams.append(f, `ilike.*${filterArr[f]['filter']}`);
//             }
//             else if (filterArr[f]['type'] === 'contains') {
//               httpParams = httpParams.append(f, `ilike.*${filterArr[f]['filter']}*`);
//             }
//             else if (filterArr[f]['type'] === 'notContains') {
//               httpParams = httpParams.append(f, `not.ilike.*${filterArr[f]['filter']}*`);
//             }
//             else {
//               httpParams = httpParams.append(f, `${operators[filterArr[f]['type']]}.${filterArr[f]['filter']}`);
//             }
//           }
//         }
//       }
//       httpOptions = {
//         params: httpParams,
//       };
//     }
//     return this.httpClient.get(`${postgrestUrl}${table}`, httpOptions);
//   }

//   public updateCellsData(tableName: string, params: any): Subscription {
//     const url = `${postgrestUrl}${tableName}?id=eq.${params.data.id}`;
//     return this.httpClient.patch(url, params.data
//     ).subscribe(
//       data => {
//       },
//       error => console.log('ERROR patch:', error)
//     );
//   };

//   public generalSearch(tableName: string, query: string): Observable<any> {
//     const url = `${postgrestUrl}${tableName}?row_text_${tableName}=ilike.*${query}*`;
//     return this.httpClient.get(url);
//   }

//   public createServerSideDatasource(myServer, gridInstance) {
//     function ServerSideDatasource(_myServer, _gridInstance) {
//       this.myServer = _myServer;
//       this.gridInstance = _gridInstance;
//     }
//     ServerSideDatasource.prototype.getRows = function(params) {
//       const that = this;
//       this.myServer.getData(params.request, function successCallback(
//         resultForGrid,
//         lastRow,
//         secondaryColDefs
//       ) {
//         params.successCallback(resultForGrid, lastRow);
//         that.setSecondaryColsIntoGrid(secondaryColDefs);
//       });
//     };
//     ServerSideDatasource.prototype.setSecondaryColsIntoGrid = function(
//       secondaryColDefs
//     ) {
//       const colDefHash = this.createColsHash(secondaryColDefs);
//       if (this.colDefHash !== colDefHash) {
//         this.gridInstance.columnApi.setSecondaryColumns(secondaryColDefs);
//         this.colDefHash = colDefHash;
//       }
//     };
//     ServerSideDatasource.prototype.createColsHash = function(colDefs) {
//       if (!colDefs) {
//         return null;
//       }
//       const parts = [];
//       const that = this;
//       colDefs.forEach((colDef) => {
//         if (colDef.children) {
//           parts.push(colDef.groupId);
//           parts.push('[' + that.createColsHash(colDef.children) + ']');
//         } else {
//           parts.push(colDef.colId);
//           if (colDef.headerName) {
//             parts.push(colDef.headerName);
//           }
//         }
//       });
//       return parts.join(',');
//     };
//     return new ServerSideDatasource(myServer, gridInstance);
//   }
//   public createMyServer(data, tableName) {
//     const that = this;
//     function MyServer(allData) {
//       this.allData = allData;
//     }
//     MyServer.prototype.getData = async function(request, callback) {
//       const rowGroupCols = request.rowGroupCols;
//       const groupKeys = request.groupKeys;
//       let valueCols = request.valueCols;
//       const pivotCols = request.pivotCols;
//       const pivotMode = request.pivotMode;
//       const pivotActive = pivotMode && pivotCols.length > 0 && valueCols.length > 0;
//       const filterModel = request.filterModel;
//       const sortModel = request.sortModel;
//       let rowData = this.allData;
//       let secondaryColDefs = null;
//       const filterPresent = filterModel && Object.keys(filterModel).length > 0;
//       if (filterPresent) {
//         rowData = await this.filterList(rowData, filterModel);
//       }
//       if (pivotActive) {
//         const pivotResult = this.pivot(pivotCols, rowGroupCols, valueCols, rowData);
//         rowData = pivotResult.data;
//         valueCols = pivotResult.aggCols;
//         secondaryColDefs = pivotResult.secondaryColDefs;
//       }
//       if (rowGroupCols.length > 0) {
//         rowData = this.filterOutOtherGroups(rowData, groupKeys, rowGroupCols);
//         const showingGroupLevel = rowGroupCols.length > groupKeys.length;
//         if (showingGroupLevel) {
//           rowData = this.buildGroupsFromData(
//             rowData,
//             rowGroupCols,
//             groupKeys,
//             valueCols
//           );
//         }
//       } else if (pivotMode) {
//         const rootGroup = this.aggregateList(rowData, valueCols);
//         rowData = [rootGroup];
//       }
//       rowData = this.sortList(rowData, sortModel);
//       const lastRowFound = rowData.length <= request.endRow;
//       const lastRow = lastRowFound ? rowData.length : null;
//       rowData = rowData.slice(request.startRow, request.endRow);
//       setTimeout(() => {
//         callback(rowData, lastRow, secondaryColDefs);
//       }, 10);
//     };
//     MyServer.prototype.sortList = function(_data, sortModel) {
//       const sortPresent = sortModel && sortModel.length > 0;
//       if (!sortPresent) {
//         return _data;
//       }
//       const resultOfSort = _data.slice();
//       resultOfSort.sort((a, b) => {
//         for (let k = 0; k < sortModel.length; k++) {
//           const sortColModel = sortModel[k];
//           const valueA = a[sortColModel.colId];
//           const valueB = b[sortColModel.colId];
//           if (valueA === valueB) {
//             continue;
//           }
//           const sortDirection = sortColModel.sort === 'asc' ? 1 : -1;
//           if (valueA > valueB) {
//             return sortDirection;
//           } else {
//             return sortDirection * -1;
//           }
//         }
//         return 0;
//       });
//       return resultOfSort;
//     };
//     // FILTER DATA
//     MyServer.prototype.filterList = async function(_data, filterModel) {
//       const filterPresent = filterModel && Object.keys(filterModel).length > 0;
//       if (!filterPresent) {
//         return _data;
//       }
//       const resultOfFilter = [];

//       const f = await that.getRowData(tableName, filterModel).toPromise();
//       const p = Promise.resolve(f);
//       p.then(d => {
//         for (const key of Object.keys(d)) {
//           const item: { [k: string]: any } = {};
//           for (const val of Object.keys(d[key])) {
//             item[`${val}`] = d[key][val];
//           }
//           resultOfFilter.push(item);
//         }
//       });
//       return resultOfFilter;
//     };

//     MyServer.prototype.iterateObject = function(object, callback) {
//       if (!object) {
//         return;
//       }
//       const keys = Object.keys(object);
//       for (let i = 0; i < keys.length; i++) {
//         const key = keys[i];
//         const value = object[key];
//         callback(key, value);
//       }
//     };
//     MyServer.prototype.pivot = function(
//       pivotCols, rowGroupCols, valueCols, _data
//     ) {
//       const pivotData = [];
//       const aggColsList = [];
//       const colKeyExistsMap = {};
//       const secondaryColDefs = [];
//       const secondaryColDefsMap = {};
//       _data.forEach((item) => {
//         const pivotValues = [];
//         pivotCols.forEach((pivotCol) => {
//           const pivotField = pivotCol.id;
//           const pivotValue = item[pivotField];
//           if (
//             pivotValue !== null &&
//             pivotValue !== undefined &&
//             pivotValue.toString
//           ) {
//             pivotValues.push(pivotValue.toString());
//           } else {
//             pivotValues.push('-');
//           }
//         });
//         const pivotItem = {};
//         valueCols.forEach((valueCol) => {
//           const valField = valueCol.id;
//           const colKey = createColKey(pivotValues, valField);
//           pivotItem[colKey] = item[valField];
//           if (!colKeyExistsMap[colKey]) {
//             addNewAggCol(colKey, valueCol);
//             addNewSecondaryColDef(colKey, pivotValues, valueCol);
//             colKeyExistsMap[colKey] = true;
//           }
//         });
//         rowGroupCols.forEach((rowGroupCol) => {
//           const rowGroupField = rowGroupCol.id;
//           pivotItem[rowGroupField] = item[rowGroupField];
//         });
//         pivotData.push(pivotItem);
//       });
//       function addNewAggCol(colKey, valueCol) {
//         const newCol = {
//           id: colKey,
//           field: colKey,
//           aggFunc: valueCol.aggFunc,
//         };
//         aggColsList.push(newCol);
//       }
//       function addNewSecondaryColDef(colKey, pivotValues, valueCol) {
//         let parentGroup = null;
//         const keyParts = [];
//         pivotValues.forEach((pivotValue) => {
//           keyParts.push(pivotValue);
//           const _colKey = createColKey(keyParts, undefined);
//           let groupColDef = secondaryColDefsMap[_colKey];
//           if (!groupColDef) {
//             groupColDef = {
//               groupId: _colKey,
//               headerName: pivotValue,
//               children: [],
//             };
//             secondaryColDefsMap[_colKey] = groupColDef;
//             if (parentGroup) {
//               parentGroup.children.push(groupColDef);
//             } else {
//               secondaryColDefs.push(groupColDef);
//             }
//           }
//           parentGroup = groupColDef;
//         });
//         parentGroup.children.push({
//           colId: colKey,
//           headerName: valueCol.aggFunc + '(' + valueCol.displayName + ')',
//           field: colKey,
//         });
//       }
//       function createColKey(pivotValues, valueField) {
//         let result = pivotValues.join('|');
//         if (valueField !== undefined) {
//           result += '|' + valueField;
//         }
//         return result;
//       }
//       return {
//         data: pivotData,
//         aggCols: aggColsList,
//         secondaryColDefs: secondaryColDefs,
//       };
//     };
//     MyServer.prototype.buildGroupsFromData = function(
//       rowData,
//       rowGroupCols,
//       groupKeys,
//       valueCols
//     ) {
//       const rowGroupCol = rowGroupCols[groupKeys.length];
//       const field = rowGroupCol.id;
//       const mappedRowData = this.groupBy(rowData, field);
//       const groups = [];
//       const _that = this;
//       this.iterateObject(mappedRowData, function(key, _rowData) {
//         const groupItem = _that.aggregateList(_rowData, valueCols);
//         groupItem[field] = key;
//         groups.push(groupItem);
//       });
//       return groups;
//     };
//     MyServer.prototype.aggregateList = function(rowData, valueCols) {
//       const result = {};
//       valueCols.forEach(valueCol => {
//         const field = valueCol.id;
//         const values = [];
//         rowData.forEach(childItem => {
//           const value = childItem[field];
//           if (value !== undefined) {
//             values.push(value);
//           }
//         });
//         switch (valueCol.aggFunc) {
//           case 'sum':
//             let sum = 0;
//             values.forEach(value => {
//               sum += parseFloat(value);
//             });
//             result[field] = sum.toFixed(0);
//             break;
//           case 'min':
//             let min = null;
//             values.forEach(value => {
//               if (min === null || min > parseFloat(value)) {
//                 min = parseFloat(value);
//               }
//             });
//             result[field] = min;
//             break;
//           case 'max':
//             let max = null;
//             values.forEach(value => {
//               if (max === null || max < parseFloat(value)) {
//                 max = parseFloat(value);
//               }
//             });
//             result[field] = max;
//             break;
//           case 'random':
//             result[field] = Math.random();
//             break;
//           case 'count':
//             let count = 0;
//             values.forEach(value => {
//               count++;
//             });
//             result[field] = count;
//             break;
//           case 'avg':
//             const avg = aggAvg(values);
//             result[field] = avg;
//             break;
//           default:
//             console.warn(
//               'unrecognised aggregation function: ' + valueCol.aggFunc
//             );
//             break;
//         }
//       });
//       return result;
//     };
//     MyServer.prototype.filterOutOtherGroups = function(
//       originalData,
//       groupKeys,
//       rowGroupCols
//     ) {
//       let filteredData = originalData;
//       const _that = this;
//       groupKeys.forEach((groupKey, index) => {
//         const rowGroupCol = rowGroupCols[index];
//         const field = rowGroupCol.id;
//         filteredData = _that.filter(filteredData, function(item) {
//           return item[field] === groupKey;
//         });
//       });
//       return filteredData;
//     };
//     MyServer.prototype.groupBy = function(_data, field) {
//       const result = {};
//       _data.forEach(item => {
//         const key = item[field];
//         let listForThisKey = result[key];
//         if (!listForThisKey) {
//           listForThisKey = [];
//           result[key] = listForThisKey;
//         }
//         listForThisKey.push(item);
//       });
//       return result;
//     };
//     MyServer.prototype.filter = function(_data, callback) {
//       const result = [];

//       _data.forEach(item => {
//         if (callback(item)) {
//           result.push(item);
//         }
//       });
//       return result;
//     };
//     return new MyServer(data);
//   }

// }

// // the average function is tricky as the multiple levels require weighted averages
// // for the non-leaf node aggregations.
// function aggAvg(input): object {
//   // const core_1 = require('@ag-grid-community/core');
//   // the average will be the sum / count
//   const _a = input.reduce(function(a, item) {
//     item = parseFloat(item);
//     const _sum = a.sum, _count = a.count;
//     const itemIsGroupResult = typeof item.value === 'number' &&
//       typeof item.count === 'number';
//     if (typeof item === 'number') {
//       return { sum: _sum + item, count: _count + 1 };
//     }
//     if (itemIsGroupResult) {
//       // we are aggregating groups, so we take the
//       // aggregated values to calculated a weighted average
//       return {
//         sum: _sum + item.value * item.count,
//         count: _count + item.count
//       };
//     }
//     return { sum: _sum, count: _count };
//   }, { sum: 0, count: 0 }), sum = _a.sum, count = _a.count;
//   // avoid divide by zero error
//   const value = count > 0 ? sum / count : null;
//   // the result will be an object. when this cell is rendered, only the avg is shown.
//   // however when this cell is part of another aggregation, the count is also needed
//   // to create a weighted average for the next level.
//   return {
//     count: count,
//     value: value,
//     // the grid by default uses toString to render values for an object, so this
//     // is a trick to get the default cellRenderer to display the avg value
//     toString: function() {
//       if (typeof this.value === 'number') {
//         return this.value.toFixed(2).toString();
//       }
//       else {
//         return '';
//       }
//     },
//     // used for sorting
//     toNumber: function() {
//       return this.value;
//     }
//   };
// }
