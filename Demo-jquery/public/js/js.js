$(document).ready(function () {
    $('#search-user').on('keyup', function () {
        let value = $(this).val();
        $.ajax({
            url: 'http://127.0.0.1:8000/user/search',
            type: 'GET',
            dataType: 'json',
            data: {keyword: value},
            success: function (result) {
                let html = '';
                console.log(result);
                $.each(result, function (index, item) {
                    html += '<tr class="user-'+item.id+'">';
                    html += '<td>';
                    html += ++index;
                    html += '</td>';
                    html += '<td class="name">';
                    html += item.name;
                    html += '</td>';
                    html += '<td>';
                    html += item.email;
                    html += '</td>';
                    html += '<td>';
                    html += '<button class="btn btn-primary" >Edit</button>';
                    html += '</td>';
                    html += '<td>';
                    html += '<button class="btn btn-danger delete-staff">Delete</button>';
                    html += '</td>';
                    html += '</tr>';
                });
                $('#list-users').html(html)
            },
            errors: function () {
            }
        })
    });
    $('body').on('click','.delete-user', function () {
        if (confirm("Bạn chắc chắn muốn xóa?")) {
            let userId = $(this).data('id');
            $.ajax({
                url: 'http://127.0.0.1:8000/user/' + userId + '/delete',
                type: 'GET',
                dataType: 'json',
                success: function (result) {
                    $('.user-'+userId).remove();
                }
            })
        }
    });
    // $('.add').on('click', function () {
    //     let staffCode = $('#staffCode').val();
    //     let name = $('#name').val();
    //     let gender = $('#gender').val();
    //     let phone = $('#phone').val();
    //     $.ajax({
    //         url: 'http://127.0.0.1:8000/staffs/create',
    //         type: 'POST',
    //         dataType: 'json',
    //         data: {
    //             staffCode: staffCode,
    //             name: name,
    //             gender: gender,
    //             phone: phone
    //         },
    //         success: function (result) {
    //             let html = '';
    //             html +=`
    //            <tr>
    //            <td>${result.staff_code}</td>
    //            <td>${result.Name}</td>
    //            <td>${result.gender}</td>
    //            <td>${result.Phone}</td>
    //            <td><button class="btn btn-primary" data-id="'+item.id+'">Edit</button></td>
    //            <td><button class="btn btn-danger delete-staff" data-id="'+item.id+'">Delete</button></td>
    //            </tr>
    //            `;
    //             $('#list-users').append(html);
    //         }
    //     })
    // })
    $('#hide').on('click',function () {
        $('.name').hide();
        $('#hide').hide();
        $('#show').show()
    });
    $('#show').on('click',function () {
        $('.name').show();
        $('#hide').show();
        $('#show').hide()
    })
});
