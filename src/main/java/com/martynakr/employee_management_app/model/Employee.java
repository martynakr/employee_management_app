package com.martynakr.employee_management_app.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Table(name="employees")
public class Employee {

    @Getter @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Getter @Setter
    @Column(name="first_name")
    private String firstName;

    @Getter @Setter
    @Column(name="last_name")
    private String lastName;

    @Getter @Setter
    @Column(name="email_id")
    private String emailId;


    public Employee(){};

    public Employee(String firstName, String lastName, String emailId) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
    }
}
