function edit(blog_id){
    let orig_title = $("#"+blog_id+" h2").text();
    let orig_content = $("#"+blog_id+" p").text();

    $("#" + blog_id + " *").hide();

    var form = `
        <div class="edit" id="edit_${blog_id}">
            <form id="postform_${blog_id}" action="/edit"  method="POST">
                <label for="posttitle">Title:</label><br>
                <input class="form-control" type="text" id="posttitle_${blog_id}" name="posttitle" value="${orig_title}" required><br>
                <label for="postcontent">Content:</label><br>
                <textarea class="form-control" id="postcontent_${blog_id}" rows="4" cols="50" name="postcontent" form="postform_${blog_id}" required>${orig_content}</textarea><br>
                <input type="hidden" name="blog_id" value="${blog_id.split("_")[1]}">
                <input type="submit" value="Submit">
                <button type="button" onclick="cancelEdit('${blog_id}')">Cancel</button>
            </form>
        </div>`;
    $("#" + blog_id).append(form);
    init();
}

function cancelEdit(blog_id){
    $("#" + blog_id + " *").show();
    $(".form_for_dlt").hide();
    $("#edit_" + blog_id).remove();
}

function footerText(){
    let today = new Date();
    footer_text = "© " + today.getFullYear() + " George Costanza";
    $("#footer_text").text(footer_text);
}

function init(){
    $("h2, label, p").addClass("libre-baskerville-regular");
    $(".date").addClass("libre-baskerville-regular-italic d-flex justify-content-end");
    $("[type='submit'], button").addClass("btn btn-secondary");
    footerText();
}