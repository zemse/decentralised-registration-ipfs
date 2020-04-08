pragma solidity 0.6.4;

contract dReg {
    struct Profile {
        bytes32 ipfsSha256Hash;
        uint256 credits;
    }
    
    mapping(address => Profile) public profiles;
    
    event ProfileUpdated(
        address indexed _userAddress,
        bytes32 _ipfsSha256Hash
    );
    
    function updateProfile(bytes32 _ipfsSha256Hash) public {
        profiles[msg.sender].ipfsSha256Hash = _ipfsSha256Hash;
        emit ProfileUpdated(msg.sender, _ipfsSha256Hash);
    }
}