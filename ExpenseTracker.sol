pragma solidity ^0.8.0;
contract ExpenseTracker{
    struct Expense{
        string title;
        int amount;
    }
    mapping(address => Expense) expenses;
    address[] expense_details;
    event NewRequest(uint);
    
    function addTransaction(address _address,string memory _title,int _amount) public  returns(int){
       Expense  memory exp1= Expense("car",100);
        expenses[_address] = Expense(_title, _amount);
        expense_details.push(_address);
        // return expenses[_address].amount;
         emit NewRequest(expense_details.length - 1);
    }
    function getExpenseDetails() public view returns (address[] memory) {
    return expense_details;
}
  function ViewStruct(address _address) public view returns (int,string memory) {
    return (expenses[_address].amount,expenses[_address].title);
}

    
    // function viewData() public view returns(int){
    //   // return add_details.amount;
    // }
}