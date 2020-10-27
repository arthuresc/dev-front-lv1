import React from "react";
import Bio from "./user_bio";
import UserNick from "./user_nick";
import UserName from "./user_name";
import UserEmail from "./user_email";
import Avatar from "./avatar";

export default function Card(props) {
  return (
    <div className="Card">
      <Avatar path={props.uAvatar} />
      <div className="UserInfos">
        <div className="Container-Line">
          <UserNick uNick={props.uNick} />
          <UserName uName={props.uName} />
        </div>
        <UserEmail uEmail={props.uEmail === null ? 'Endereço não listado' : props.uEmail} />
        <Bio uBio={props.uBio === null ? 'Biografia não encontrada' : props.uBio} />
      </div>
    </div>
  );
}
