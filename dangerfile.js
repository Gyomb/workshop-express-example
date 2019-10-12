import { danger, markdown } from "danger";

const modifieMD = danger.git.modified_files.join("\n- ")
markdown("Changed Files in this PR: \n- " + modifieMD)

