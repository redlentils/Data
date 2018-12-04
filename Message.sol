pragma solidity ^0.5.0;

contract Message {

    struct Convo {
        address creator;
        string subject;
        string message;
        address[] viewers;
        uint viewerCount;
        uint time;
        bytes32 id;
        mapping(address => bool) viewer;
    }

    bytes32[] public ids;
    Convo[] public convos;
    uint public convo_count;
    address[] public users;
    mapping(address => bytes32) viewable_convos;

    function createConvo(address[] memory viewers, string memory subject, string memory message) public {
        uint viewerCount = viewers.length;

        Convo memory newConvo = Convo({
            creator: msg.sender,
            subject: subject,
            message: message,
            viewers: viewers,
            viewerCount: viewerCount,
            time: now,
            id: keccak256(abi.encodePacked(msg.sender, subject, message, viewers, now))
        });



        convo_count++;

        // newConvo.viewer[msg.sender] = true;

        // uint index;
        // Convo storage convo = convos[index];
        // convo.viewer[msg.sender] = true;

        convos.push(newConvo);
    }

}
